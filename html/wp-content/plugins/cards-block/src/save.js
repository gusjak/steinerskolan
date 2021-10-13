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
		<section className="pink-box-section">
			<div className="pink-box-wrapper">
				<div className="pink-box-wrapper-1">
					<div className="pink-box-1"></div>
					<div className="white-section">
						<svg
							width="24"
							height="24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z"
								fill="#000"
							/>
						</svg>
						<h4 className="fourth-header">{attributes.titleOne}</h4>
					</div>
				</div>

				<div className="pink-box-wrapper-2">
					<div className="pink-box-2"></div>
					<div className="white-section">
						<svg
							width="24"
							height="24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z"
								fill="#000"
							/>
						</svg>
						<h4 className="fourth-header">{attributes.titleTwo}</h4>
					</div>
				</div>

				<div className="pink-box-wrapper-3">
					<div className="pink-box-3"></div>
					<div className="white-section">
						<svg
							className="arrow-right"
							width="24"
							height="24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z"
								fill="#000"
							/>
						</svg>
						<h4 className="fourth-header">{attributes.titleThree}</h4>
					</div>
				</div>
			</div>
		</section>
	);
}
