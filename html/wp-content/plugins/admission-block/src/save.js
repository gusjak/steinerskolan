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
	const imageOne = (srcOne, altOne) => {
		if (!srcOne) return null;

		if (altOne) {
			return <img className="color-blot-1" src={srcOne} alt={altOne} />;
		}

		// if no alt selected
		return (
			<img className="color-blot-1" src={srcOne} alt="" aria-hidden="true" />
		);
	};

	const imageTwo = (srcTwo, altTwo) => {
		if (!srcTwo) return null;

		if (altTwo) {
			return <img className="color-blot-2" src={srcTwo} alt={altTwo} />;
		}

		// if no alt selected
		return (
			<img className="color-blot-2" src={srcTwo} alt="" aria-hidden="true" />
		);
	};

	const imageThree = (srcThree, altThree) => {
		if (!srcThree) return null;

		if (altThree) {
			return <img className="color-blot-3" src={srcThree} alt={altThree} />;
		}

		// if no alt selected
		return (
			<img className="color-blot-3" src={srcThree} alt="" aria-hidden="true" />
		);
	};
	const imageFour = (srcFour, altFour) => {
		if (!srcFour) return null;

		if (altFour) {
			return <img className="color-blot-3" src={srcFour} alt={altFour} />;
		}

		// if no alt selected
		return (
			<img className="color-blot-3" src={srcFour} alt="" aria-hidden="true" />
		);
	};
	return (
		<section className="learning-section">
			{/* Title */}
			<h2 className="secondary-header">{attributes.mainTitle}</h2>

			{/* Box 1 */}
			<div className="box">
				<div className="box-left">
					{imageOne(attributes.imageUrlOne, attributes.imageAltOne)}
					<h3 className="third-header">{attributes.leftTitleOne}</h3>
				</div>

				<div className="box-right">
					<h4 className="fourth-header">{attributes.rightTitleOne}</h4>
					<p className="body-text">{attributes.rightBodyOne}</p>
				</div>
			</div>
			{/* Box 2 */}
			<div className="box">
				<div className="box-left">
					{imageTwo(attributes.imageUrlTwo, attributes.imageAltTwo)}
					<h3 className="third-header">{attributes.leftTitleTwo}</h3>
				</div>

				<div className="box-right">
					<h4 className="fourth-header">{attributes.rightTitleTwo}</h4>
					<p className="body-text">{attributes.rightBodyTwo}</p>
				</div>
			</div>

			{/* Box 3 */}
			<div className="box">
				<div className="box-left">
					{imageThree(attributes.imageUrlThree, attributes.imageAltThree)}
					<h3 className="third-header">{attributes.leftTitleThree}</h3>
				</div>

				<div className="box-right">
					<h4 className="fourth-header">{attributes.rightTitleThree}</h4>
					<p className="body-text">{attributes.rightBodyThree}</p>
					<button class="read-more-button">
						<a href="">{attributes.buttonOne}</a>
					</button>
				</div>
			</div>

			{/* Box 4 */}
			<div className="box">
				<div className="box-left">
					{imageFour(attributes.imageUrlFour, attributes.imageAltFour)}
					<h3 className="third-header">{attributes.leftTitleFour}</h3>
				</div>

				<div className="box-right">
					<h4 className="fourth-header">{attributes.rightTitleFour}</h4>
					<p className="body-text">{attributes.rightBodyFour}</p>
					<button class="read-more-button">
						<a href="">{attributes.buttonTwo}</a>
					</button>
				</div>
			</div>
		</section>
	);
}
