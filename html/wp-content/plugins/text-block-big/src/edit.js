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
				tagname="h2"
				placeholder="Title"
				value={attributes.titleOne}
				onChange={(newTitleOne) => setAttributes({ titleOne: newTitleOne })}
				className="secondary-header"
			/>

			{/* Body */}
			<RichText
				key="editable"
				tagname="p"
				placeholder="First Text"
				value={attributes.bodyOne}
				onChange={(newBodyOne) => setAttributes({ bodyOne: newBodyOne })}
				className="box-text"
			/>
			<RichText
				key="editable"
				tagname="h4"
				placeholder="Title"
				value={attributes.titleTwo}
				onChange={(newTitleTwo) => setAttributes({ titleTwo: newTitleTwo })}
				className="fourth-header"
			/>
			<RichText
				key="editable"
				tagname="p"
				placeholder="Second Text"
				value={attributes.bodyTwo}
				onChange={(newBodyTwo) => setAttributes({ bodyTwo: newBodyTwo })}
				className="box-text"
			/>
			<RichText
				key="editable"
				tagname="h4"
				placeholder="Title"
				value={attributes.titleThree}
				onChange={(newTitleThree) =>
					setAttributes({ titleThree: newTitleThree })
				}
				className="fourth-header"
			/>
			<RichText
				key="editable"
				tagname="p"
				placeholder="Third Text"
				value={attributes.bodyThree}
				onChange={(newBodyThree) => setAttributes({ bodyThree: newBodyThree })}
				className="box-text"
			/>
		</div>
	);
}