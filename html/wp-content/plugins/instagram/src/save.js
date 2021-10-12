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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<section class="instagram-section">
			<h2 class="secondary-header">Följ oss på instagram</h2>
			<div
				class="tagembed-container"
				style=" width:1200px;height:500px;overflow: auto;"
			>
				<div
					class="tagembed-socialwall"
					data-wall-id="14022"
					view-url="https://widget.tagembed.com/14022?view"
				>
					{" "}
				</div>{" "}
				<script
					src="//widget.tagembed.com/embed.min.js"
					type="text/javascript"
				></script>
			</div>
		</section>
	);
}
