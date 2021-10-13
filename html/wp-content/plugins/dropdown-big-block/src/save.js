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
				<div className="drop-down-bar-waldorf-1">
					<div className="colored-edge-1"></div>
					<h3 className="third-header">En tolvårig plan för lärandet</h3>
					<button className="drop-down-button-1"></button>
				</div>

				<div className="drop-down-content-box-waldorf-1">
					<p className="box-text">{attributes.dropDownTextOne}</p>
				</div>

				{/* 2 */}
				<div className="drop-down-bar-waldorf-2">
					<div className="colored-edge-2"></div>
					<h3 className="third-header">
						Trygghet och kontinuitet: Klasslärarens roll
					</h3>
					<button className="drop-down-button-2"></button>
				</div>

				<div className="drop-down-content-box-waldorf-2">
					<p className="box-text">{attributes.dropDownTextTwo}</p>
				</div>

				{/* 3 */}
				<div className="drop-down-bar-waldorf-3">
					<div className="colored-edge-3"></div>
					<h3 className="third-header">Organiskt schema</h3>
					<button className="drop-down-button-3"></button>
				</div>

				<div className="drop-down-content-box-waldorf-3">
					<p className="box-text">{attributes.dropDownTextThree}</p>
				</div>

				{/* 4 */}
				<div className="drop-down-bar-waldorf-4">
					<div className="colored-edge-4"></div>
					<h3 className="third-header">Arbetsbok istället för lärobok</h3>
					<button className="drop-down-button-4"></button>
				</div>

				<div className="drop-down-content-box-waldorf-4">
					<p className="box-text">{attributes.dropDownTextFour}</p>
				</div>

				{/* 5 */}
				<div className="drop-down-bar-waldorf-5">
					<div className="colored-edge-5"></div>
					<h3 className="third-header"> Periodundervisning</h3>
					<button className="drop-down-button-5"></button>
				</div>

				<div className="drop-down-content-box-waldorf-5">
					<p className="box-text">{attributes.dropDownTextFive}</p>
				</div>

				{/* 6 */}
				<div className="drop-down-bar-waldorf-6">
					<div className="colored-edge-6"></div>
					<h3 className="third-header">Språkundervisning</h3>
					<button className="drop-down-button-6"></button>
				</div>

				<div className="drop-down-content-box-waldorf-6">
					<p className="box-text">{attributes.dropDownTextSix}</p>
				</div>

				{/* 7 */}
				<div className="drop-down-bar-waldorf-7">
					<div className="colored-edge-7"></div>
					<h3 className="third-header">Språkundervisning</h3>
					<button className="drop-down-button-7"></button>
				</div>

				<div className="drop-down-content-box-waldorf-7">
					<p className="box-text">{attributes.dropDownTextSeven}</p>
				</div>

				{/* 8 */}
				<div className="drop-down-bar-waldorf-8">
					<div className="colored-edge-8"></div>
					<h3 className="third-header">Läsårsbrev/Betyg</h3>
					<button className="drop-down-button-8"></button>
				</div>

				<div className="drop-down-content-box-waldorf-8">
					<p className="box-text">{attributes.dropDownTextEight}</p>
				</div>

				{/* 9 */}
				<div className="drop-down-bar-waldorf-9">
					<div className="colored-edge-9"></div>
					<h3 className="third-header">Månadsfest</h3>
					<button className="drop-down-button-9"></button>
				</div>

				<div className="drop-down-content-box-waldorf-9">
					<p className="box-text">{attributes.dropDownTextNine}</p>
				</div>

				{/* 10 */}
				<div className="drop-down-bar-waldorf-10">
					<div className="colored-edge-10"></div>
					<h3 className="third-header">Lärandet – en process</h3>
					<button className="drop-down-button-10"></button>
				</div>

				<div className="drop-down-content-box-waldorf-10">
					<p className="box-text">{attributes.dropDownTextTen}</p>
				</div>
			</div>
		</section>
	);
}
