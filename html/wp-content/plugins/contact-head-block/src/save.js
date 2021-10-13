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
export default function save({ attributes }) {
	return (
		<section class="contact-section">
			<div className="contact-wrapper">
				{/* Main Title */}
				<h2 class="secondary-header">{attributes.titleOne}</h2>

				{/* First Body */}
				<div className="top-box">
					<div className="top-left-box">
						<h4 class="info-header-1">{attributes.titleTwo}</h4>
						<div className="contact-info-box-1">{attributes.bodyOne}</div>
						<div class="bottom-line"></div>
					</div>

					<div className="top-right-box">
						{/* Second Body */}
						<h4 class="info-header-2">{attributes.titleThree}</h4>
						<div className="contact-info-box-2">{attributes.bodyTwo}</div>
						<div class="bottom-line"></div>
					</div>
				</div>

				<div className="middle-box">
					<div className="middle-left-box">
						{/* Third Body */}
						<h4 class="info-header-3">{attributes.titleFour}</h4>
						<div className="contact-info-box-3">{attributes.bodyThree}</div>
						<div class="bottom-line"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
