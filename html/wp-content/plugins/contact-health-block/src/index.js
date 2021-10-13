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
registerBlockType("create-block/contact-health-block", {
	attributes: {
		titleOne: {
			source: "text",
			selector: ".secondary-header",
		},
		titleTwo: {
			source: "text",
			selector: ".info-header-1",
		},
		titleThree: {
			source: "text",
			selector: ".info-header-2",
		},
		titleFour: {
			source: "text",
			selector: ".info-header-3",
		},
		titleFive: {
			source: "text",
			selector: ".info-header-4",
		},
		titleSix: {
			source: "text",
			selector: ".info-header-5",
		},
		bodyOne: {
			type: "array",
			source: "children",
			selector: ".contact-info-box-1",
		},
		bodyTwo: {
			type: "array",
			source: "children",
			selector: ".contact-info-box-2",
		},
		bodyThree: {
			type: "array",
			source: "children",
			selector: ".contact-info-box-3",
		},
		bodyFour: {
			type: "array",
			source: "children",
			selector: ".contact-info-box-4",
		},
		bodyFive: {
			type: "array",
			source: "children",
			selector: ".contact-info-box-5",
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
