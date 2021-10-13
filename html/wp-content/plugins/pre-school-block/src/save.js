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
			return <img className="preschool-image-1" src={srcOne} alt={altOne} />;
		}

		// if no alt selected
		return (
			<img
				className="preschool-image-1"
				src={srcOne}
				alt=""
				aria-hidden="true"
			/>
		);
	};

	const imageTwo = (srcTwo, altTwo) => {
		if (!srcTwo) return null;

		if (altTwo) {
			return <img className="preschool-image-2" src={srcTwo} alt={altTwo} />;
		}

		// if no alt selected
		return (
			<img
				className="preschool-image-2"
				src={srcTwo}
				alt=""
				aria-hidden="true"
			/>
		);
	};

	const imageThree = (srcThree, altThree) => {
		if (!srcThree) return null;

		if (altThree) {
			return (
				<img className="preschool-image-3" src={srcThree} alt={altThree} />
			);
		}

		// if no alt selected
		return (
			<img
				className="preschool-image-3"
				src={srcThree}
				alt=""
				aria-hidden="true"
			/>
		);
	};
	return (
		<section class="preschool-section">
			<div className="preschool-wrapper">
				<div className="preschool-left-box">
					{/* Title */}
					<h2 class="secondary-header">{attributes.title}</h2>

					<p class="preschool-text-content-1">{attributes.bodyOne}</p>
					<p class="preschool-text-content-2">{attributes.bodyTwo}</p>
					<p class="preschool-text-content-3">{attributes.bodyThree}</p>

					<div className="preschool-buttons">
						<button class="preschool-button-1">1</button>
						<button class="preschool-button-2">2</button>
						<button class="preschool-button-3">3</button>
					</div>
				</div>

				<div className="preschool-right-box">
					<div className="preschool-images">
						{/* Image 1 */}
						{imageOne(attributes.imageUrlOne, attributes.imageAltOne)}
						{/* Image 2 */}
						{imageTwo(attributes.imageUrlTwo, attributes.imageAltTwo)}
						{/* Image 3 */}
						{imageThree(attributes.imageUrlThree, attributes.imageAltThree)}
					</div>
				</div>
			</div>
		</section>
	);
}
