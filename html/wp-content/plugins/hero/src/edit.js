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
import { Button } from "@wordpress/components";

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
	const { topTitle, bottomTitle, body, buttonText } = attributes;

	function onChangeTopTitle(newTopTitle) {
		setAttributes({ topTitle: newTopTitle });
	}
	function onChangeBottomTitle(newBottomTitle) {
		setAttributes({ bottomTitle: newBottomTitle });
	}

	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	function onChangeButtonText(newButtonText) {
		setAttributes({ buttonText: newButtonText });
	}

	return (
		<div {...useBlockProps()}>
			<RichText
				key="editable"
				tagname="h1"
				placeholder="Top Title"
				value={topTitle}
				onChange={onChangeTopTitle}
				className="hero-top-title"
			/>
			<RichText
				key="editable"
				tagname="h2"
				placeholder="Bottom Title"
				value={bottomTitle}
				onChange={onChangeBottomTitle}
				className="hero-bottom-title"
			/>
			<RichText
				key="editable"
				tagname="p"
				placeholder="Text"
				value={body}
				onChange={onChangeBody}
				className="hero-text"
			/>
			<RichText
				key="editable"
				tagname="button"
				placeholder="Button Text"
				value={buttonText}
				onChange={onChangeButtonText}
				className="apply"
			/>
		</div>
	);
}
