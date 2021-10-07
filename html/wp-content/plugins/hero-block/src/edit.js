/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const { title, text } = attributes;

	function changeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}

	function changeText(newText) {
		setAttributes({ text: newText });
	}

	return (
		<div {...useBlockProps}>
			<RichText
				key="editable"
				tagName="h1"
				placeholder="Hero Titel"
				value={title}
				onChange={changeTitle}
				className="hero-title"
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="Hero text"
				value={text}
				onChange={changeText}
				className="hero-text"
			/>
		</div>
	);
}
