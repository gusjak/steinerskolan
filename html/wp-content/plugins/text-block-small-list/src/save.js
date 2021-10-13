/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<section className="text-section">
			{/* Title */}
			<h3 className="third-header">{attributes.title}</h3>

			{/* Body Texts */}
			<p className="box-text">{attributes.body}</p>

			{/* List */}
			<ul>
				<li className="text-list-item">
					{attributes.listItemOne}
					<span className="list-item-bold">, ordförande</span>
				</li>
				<li className="text-list-item">
					{attributes.listItemTwo}
					<span className="list-item-bold">, vice ordförance</span>
				</li>
				<li className="text-list-item">
					{attributes.listItemThree}
					<span className="list-item-bold">, kassör</span>
				</li>
				<li className="text-list-item">
					{attributes.listItemFour}
					<span className="list-item-bold">, ledamot</span>
				</li>
				<li className="text-list-item">
					{attributes.listItemFive}
					<span className="list-item-bold">, ledamot</span>
				</li>
			</ul>
		</section>
	);
}
