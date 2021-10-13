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
		<section className="dates-section">
			{/* Title */}
			<h2 className="secondary-header">Viktiga datum</h2>

			{/* List */}
			<ul>
				<li className="text-list-item">
					<h4 className="fourth-header">Läsårets början 2021</h4>
					{attributes.listItemOne}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Höstlov (Läslov)</h4>
					{attributes.listItemTwo}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Terminsavslutning 2021</h4>
					{attributes.listItemThree}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Terminsstart 2022</h4>
					{attributes.listItemFour}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Sportlov</h4>
					{attributes.listItemFive}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Påsklov</h4>
					{attributes.listItemSix}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Läsårets slut 2022</h4>
					{attributes.listItemSeven}
				</li>
				<li className="text-list-item">
					<h4 className="fourth-header">Sommarstängning fritids</h4>
					{attributes.listItemEight}
				</li>
			</ul>
		</section>
	);
}
