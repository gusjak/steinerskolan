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
			{/* Title */}
			<RichText
				key="editable"
				tagname="h3"
				placeholder="Title"
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				className="third-header"
			/>

			{/* Body Text */}
			<RichText
				key="editable"
				tagname="p"
				placeholder="First Text"
				value={attributes.body}
				onChange={(newBody) => setAttributes({ body: newBody })}
				className="box-text"
			/>

			{/* List */}
			<ul>
				<li>
					<RichText
						key="editable"
						tagname="li"
						placeholder="List Item Text"
						value={attributes.listItemOne}
						onChange={(newlistItemOne) =>
							setAttributes({ listItemOne: newlistItemOne })
						}
						className="text-list-item"
					/>
				</li>
				<li>
					<RichText
						key="editable"
						tagname="li"
						placeholder="List Item Text"
						value={attributes.listItemTwo}
						onChange={(newlistItemTwo) =>
							setAttributes({ listItemTwo: newlistItemTwo })
						}
						className="text-list-item"
					/>
				</li>
				<li>
					<RichText
						key="editable"
						tagname="li"
						placeholder="List Item Text"
						value={attributes.listItemThree}
						onChange={(newlistItemThree) =>
							setAttributes({ listItemThree: newlistItemThree })
						}
						className="text-list-item"
					/>
				</li>
				<li>
					<RichText
						key="editable"
						tagname="li"
						placeholder="List Item Text"
						value={attributes.listItemFour}
						onChange={(newlistItemFour) =>
							setAttributes({ listItemFour: newlistItemFour })
						}
						className="text-list-item"
					/>
				</li>
				<li>
					<RichText
						key="editable"
						tagname="li"
						placeholder="List Item Text"
						value={attributes.listItemFive}
						onChange={(newlistItemFive) =>
							setAttributes({ listItemFive: newlistItemFive })
						}
						className="text-list-item"
					/>
				</li>
			</ul>
		</div>
	);
}
