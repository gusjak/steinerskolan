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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<RichText
				key="editable"
				tagname="h2"
				placeholder="Title"
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				className="list-title"
			/>
			{/* List */}
			<ul className="food-list">
				<li>
					<h3 className="week-day-title">Måndag</h3>
					<RichText
						key="editable"
						tagname="p"
						placeholder="List Item Text"
						value={attributes.monday}
						onChange={(newMonday) => setAttributes({ monday: newMonday })}
						className="week-day-text"
					/>
				</li>
				<li>
					<h3 className="week-day-title">Tisdag</h3>
					<RichText
						key="editable"
						tagname="p"
						placeholder="List Item Text"
						value={attributes.tuesday}
						onChange={(newTuesday) => setAttributes({ tuesday: newTuesday })}
						className="week-day-text"
					/>
				</li>
				<li>
					<h3 className="week-day-title">Onsdag</h3>
					<RichText
						key="editable"
						tagname="p"
						placeholder="List Item Text"
						value={attributes.wednesday}
						onChange={(newMWednesday) =>
							setAttributes({ wednesday: newMWednesday })
						}
						className="week-day-text"
					/>
				</li>
				<li>
					<h3 className="week-day-title">Torsdag</h3>
					<RichText
						key="editable"
						tagname="p"
						placeholder="List Item Text"
						value={attributes.thursday}
						onChange={(newThursday) => setAttributes({ thursday: newThursday })}
						className="week-day-text"
					/>
				</li>
				<li>
					<h3 className="week-day-title">Fredag</h3>
					<RichText
						key="editable"
						tagname="p"
						placeholder="List Item Text"
						value={attributes.friday}
						onChange={(newFriday) => setAttributes({ friday: newFriday })}
						className="week-day-text"
					/>
				</li>
			</ul>

			{/* Button */}
			<RichText
				key="editable"
				tagname="button"
				placeholder="Button Text"
				value={attributes.buttonText}
				onChange={(newButtonText) =>
					setAttributes({ buttonText: newButtonText })
				}
				className="kitchen-button"
			/>
		</div>
	);
}
