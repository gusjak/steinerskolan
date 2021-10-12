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
		<section className="kitchen-list">
			<h2 className="list-title">{attributes.title}</h2>
			<ul className="food-list">
				<li>
					<h3 className="week-day-title">Måndag</h3>
					<p className="week-day-text">{attributes.monday}</p>
				</li>
				<li>
					<h3 className="week-day-title">Tisdag</h3>
					<p className="week-day-text">{attributes.tuesday}</p>
				</li>
				<li>
					<h3 className="week-day-title">Onsdag</h3>
					<p className="week-day-text">{attributes.wednesday}</p>
				</li>
				<li>
					<h3 className="week-day-title">Torsdag</h3>
					<p className="week-day-text">{attributes.thursday}</p>
				</li>
				<li>
					<h3 className="week-day-title">Fredag</h3>
					<p className="week-day-text">{attributes.friday}</p>
				</li>
			</ul>

			<button className="kitchen-button">
				<a href="">{attributes.buttonText}</a>
			</button>
		</section>
	);
}
