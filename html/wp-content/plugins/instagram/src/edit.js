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
import { useBlockProps } from "@wordpress/block-editor";

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
export default function Edit() {
	return (
		<section class="instagram-section">
			<h2 class="secondary-header">Följ oss på instagram</h2>
			<div
				class="tagembed-container"
				style="width: 100%; height: 100%; overflow: auto"
			>
				<div
					class="tagembed-socialwall"
					data-wall-id="14022"
					view-url="https://widget.tagembed.com/14022?view"
				></div>
				<script
					src="//widget.tagembed.com/embed.min.js"
					type="text/javascript"
				></script>
			</div>
		</section>
	);
}
