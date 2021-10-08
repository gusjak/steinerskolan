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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const HERO_TEMPLATE = [
		["core/heading", { placeholder: "Top Hero Title", className: "top-hero-title" }],
		["core/heading", { placeholder: "Bottom Hero Title", className: "bottom-hero-title" }],
		["core/paragraph", { placeholder: "Hero Text", className: "hero-text" }],
		["core/button", { placeholder: "Button text", className: "hero-button" }],
	];
	return (
		<div {...useBlockProps()}>
			<InnerBlocks template={HERO_TEMPLATE} />
		</div>
	);
}
