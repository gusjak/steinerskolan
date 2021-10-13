/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("create-block/admission-block", {
	attributes: {
		mainTitle: {
			type: "string",
			selector: "h2",
		},
		leftTitleOne: {
			type: "string",
			selector: "h3",
		},
		leftTitleTwo: {
			type: "string",
			selector: "h3",
		},
		leftTitleThree: {
			type: "string",
			selector: "h3",
		},
		leftTitleFour: {
			type: "string",
			selector: "h3",
		},
		imageUrlOne: {
			attribute: "src",
			selector: "color-blot-1",
		},
		imageAltOne: {
			attribute: "alt",
			selector: "color-blot-1",
		},
		imageUrlTwo: {
			attribute: "src",
			selector: "color-blot-2",
		},
		imageAltTwo: {
			attribute: "alt",
			selector: "color-blot-2",
		},
		imageUrlThree: {
			attribute: "src",
			selector: "color-blot-3",
		},
		imageAltThree: {
			attribute: "alt",
			selector: "color-blot-3",
		},
		imageUrlFour: {
			attribute: "src",
			selector: "color-blot-4",
		},
		imageAltFour: {
			attribute: "alt",
			selector: "color-blot-4",
		},
		rightTitleOne: {
			type: "string",
			selector: "h4",
		},
		rightTitleTwo: {
			type: "string",
			selector: "h4",
		},
		rightTitleThree: {
			type: "string",
			selector: "h4",
		},
		rightTitleFour: {
			type: "string",
			selector: "h4",
		},
		rightBodyOne: {
			type: "string",
			selector: "p",
		},
		rightBodyTwo: {
			type: "string",
			selector: "p",
		},
		rightBodyThree: {
			type: "string",
			selector: "p",
		},
		rightBodyFour: {
			type: "string",
			selector: "p",
		},
		buttonOne: {
			type: "string",
			selector: "button",
		},
		buttonTwo: {
			type: "string",
			selector: "button",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
