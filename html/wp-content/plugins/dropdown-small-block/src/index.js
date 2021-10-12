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
registerBlockType("create-block/dropdown-small-block", {
	attributes: {
		title: {
			type: "string",
			selector: "h2",
		},
		dropDownTextOne: {
			type: "string",
			selector: "p",
		},
		dropDownTextTwo: {
			type: "string",
			selector: "p",
		},
		dropDownTextThree: {
			type: "string",
			selector: "p",
		},
		dropDownTextFour: {
			type: "string",
			selector: "p",
		},
		dropDownTextFive: {
			type: "string",
			selector: "p",
		},
		dropDownTextSix: {
			type: "string",
			selector: "p",
		},
		dropDownTextSeven: {
			type: "string",
			selector: "p",
		},
		dropDownTextEight: {
			type: "string",
			selector: "p",
		},
		dropDownTextNine: {
			type: "string",
			selector: "p",
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
