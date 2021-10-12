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
			return <img className="kitchen-image-1" src={srcOne} alt={altOne} />;
		}

		// if no alt selected
		return (
			<img className="kitchen-image-1" src={srcOne} alt="" aria-hidden="true" />
		);
	};

	const imageTwo = (srcTwo, altTwo) => {
		if (!srcTwo) return null;

		if (altTwo) {
			return <img className="kitchen-image-2" src={srcTwo} alt={altTwo} />;
		}

		// if no alt selected
		return (
			<img className="kitchen-image-2" src={srcTwo} alt="" aria-hidden="true" />
		);
	};

	const imageThree = (srcThree, altThree) => {
		if (!srcThree) return null;

		if (altThree) {
			return <img className="kitchen-image3" src={srcThree} alt={altThree} />;
		}

		// if no alt selected
		return (
			<img
				className="kitchen-image3"
				src={srcThree}
				alt=""
				aria-hidden="true"
			/>
		);
	};
	return (
		<section class="grid-section">
			<h2 class="info-title">{attributes.title}</h2>
			<div class="box-container">
				<div class="box-group-1">
					<div class="box-1">
						{imageOne(attributes.imageUrlOne, attributes.imageAltOne)}
					</div>
					<div class="box-2">
						<p class="box-text-kitchen">{attributes.bodyOne}</p>
					</div>
				</div>
				<div class="box-group-2">
					<div class="box-3">
						<p class="box-text-kitchen">{attributes.bodyTwo}</p>
					</div>
					<div class="box-4">
						{imageTwo(attributes.imageUrlTwo, attributes.imageAltTwo)}
					</div>
				</div>
				<div class="box-group-3">
					<div class="box-5">
						{imageThree(attributes.imageUrlThree, attributes.imageAltThree)}
					</div>
					<div class="box-6">
						<p class="box-text-kitchen">{attributes.bodyThree}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
