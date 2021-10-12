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
		<section className="drop-down-section">
			{/* Title */}
			<h2 className="secondary-header">{attributes.title}</h2>

			{/* Dropdown */}
			<div className="drop-down-wrapper">
				{/* 1 */}
				<div className="drop-down-bar-1">
					<div className="colored-edge-1"></div>
					<h3 className="third-header">Årskurs 1</h3>
					<button className="drop-down-button-1"></button>
				</div>

				<div className="drop-down-content-box-1">
					<p className="box-text">{attributes.dropDownTextOne}</p>
				</div>

				{/* 2 */}
				<div className="drop-down-bar-2">
					<div className="colored-edge-2"></div>
					<h3 className="third-header">Årskurs 2</h3>
					<button className="drop-down-button-2"></button>
				</div>

				<div className="drop-down-content-box-2">
					<p className="box-text">{attributes.dropDownTextTwo}</p>
				</div>

				{/* 3 */}
				<div className="drop-down-bar-3">
					<div className="colored-edge-3"></div>
					<h3 className="third-header">Årskurs 3</h3>
					<button className="drop-down-button-3"></button>
				</div>

				<div className="drop-down-content-box-3">
					<p className="box-text">{attributes.dropDownTextThree}</p>
				</div>

				{/* 4 */}
				<div className="drop-down-bar-4">
					<div className="colored-edge-4"></div>
					<h3 className="third-header">Årskurs 4</h3>
					<button className="drop-down-button-4"></button>
				</div>

				<div className="drop-down-content-box-4">
					<p className="box-text">{attributes.dropDownTextFour}</p>
				</div>

				{/* 5 */}
				<div className="drop-down-bar-5">
					<div className="colored-edge-5"></div>
					<h3 className="third-header">Årskurs 5</h3>
					<button className="drop-down-button-5"></button>
				</div>

				<div className="drop-down-content-box-5">
					<p className="box-text">{attributes.dropDownTextFive}</p>
				</div>

				{/* 6 */}
				<div className="drop-down-bar-6">
					<div className="colored-edge-6"></div>
					<h3 className="third-header">Årskurs 6</h3>
					<button className="drop-down-button-6"></button>
				</div>

				<div className="drop-down-content-box-6">
					<p className="box-text">{attributes.dropDownTextSix}</p>
				</div>

				{/* 7 */}
				<div className="drop-down-bar-7">
					<div className="colored-edge-7"></div>
					<h3 className="third-header">Årskurs 7</h3>
					<button className="drop-down-button-7"></button>
				</div>

				<div className="drop-down-content-box-7">
					<p className="box-text">{attributes.dropDownTextSeven}</p>
				</div>

				{/* 8 */}
				<div className="drop-down-bar-8">
					<div className="colored-edge-8"></div>
					<h3 className="third-header">Årskurs 8</h3>
					<button className="drop-down-button-8"></button>
				</div>

				<div className="drop-down-content-box-8">
					<p className="box-text">{attributes.dropDownTextEight}</p>
				</div>

				{/* 9 */}
				<div className="drop-down-bar-9">
					<div className="colored-edge-9"></div>
					<h3 className="third-header">Årskurs 9</h3>
					<button className="drop-down-button-9"></button>
				</div>

				<div className="drop-down-content-box-9">
					<p className="box-text">{attributes.dropDownTextNine}</p>
				</div>
			</div>
		</section>
	);
}
