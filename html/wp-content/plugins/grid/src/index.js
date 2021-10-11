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
registerBlockType("create-block/grid", {
	attributes: {
		title: {
			type: "string",
			selector: "h2",
		},
		imageUrlOne: {
			attribute: "src",
			selector: "info-image-1",
		},
		imageAltOne: {
			attribute: "alt",
			selector: "info-image-1",
		},
		bodyOne: {
			type: "string",
			selector: "p",
		},
		buttonTextOne: {
			type: "string",
			selector: "button",
		},
		bodyTwo: {
			type: "string",
			selector: "p",
		},
		buttonTextTwo: {
			type: "string",
			selector: "button",
		},
		imageUrlTwo: {
			attribute: "src",
			selector: "info-image-2",
		},
		imageAltTwo: {
			attribute: "alt",
			selector: "info-image-2",
		},
		imageUrlThree: {
			attribute: "src",
			selector: "info-image-3",
		},
		imageAltThree: {
			attribute: "alt",
			selector: "info-image-3",
		},
		bodyThree: {
			type: "string",
			selector: "p",
		},
		buttonTextThree: {
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
