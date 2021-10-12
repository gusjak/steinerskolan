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
registerBlockType("create-block/dropdown-block", {
	attributes: {
		title: {
			type: "string",
			selector: "h2",
		},
		// dropDownTitleOne: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleTwo: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleThree: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleFour: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleFive: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleSix: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleSeven: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleEight: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleNine: {
		// 	type: "string",
		// 	selector: "h2",
		// },
		// dropDownTitleOne: {
		// 	type: "string",
		// 	selector: "h2",
		// },
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
		// buttonOne: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonTwo: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonThree: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonFour: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonFive: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonSix: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonSeven: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonEight: {
		// 	type: "string",
		// 	selector: "button",
		// },
		// buttonNine: {
		// 	type: "string",
		// 	selector: "button",
		// },
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
