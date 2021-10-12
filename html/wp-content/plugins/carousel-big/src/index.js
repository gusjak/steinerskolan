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
registerBlockType("create-block/carousel-big", {
	attributes: {
		title: {
			type: "string",
			selector: "h2",
		},
		imageUrl: {
			attribute: "src",
			selector: "student-image",
		},
		imageAlt: {
			attribute: "alt",
			selector: "student-image",
		},
		studentName: {
			type: "string",
			selector: "h3",
		},
		bodyProfession: {
			type: "string",
			selector: "p",
		},
		questionOne: {
			type: "string",
			selector: "h4",
		},
		bodyAnswerOne: {
			type: "string",
			selector: "p",
		},
		questionTwo: {
			type: "string",
			selector: "h4",
		},
		bodyAnswerTwo: {
			type: "string",
			selector: "p",
		},
		date: {
			type: "string",
			selector: "h4",
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
