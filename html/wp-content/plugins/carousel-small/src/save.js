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
			return <img className="gallery-image-1" src={srcOne} alt={altOne} />;
		}

		// if no alt selected
		return (
			<img className="gallery-image-1" src={srcOne} alt="" aria-hidden="true" />
		);
	};

	const imageTwo = (srcTwo, altTwo) => {
		if (!srcTwo) return null;

		if (altTwo) {
			return <img className="gallery-image-2" src={srcTwo} alt={altTwo} />;
		}

		// if no alt selected
		return (
			<img className="gallery-image-2" src={srcTwo} alt="" aria-hidden="true" />
		);
	};

	const imageThree = (srcThree, altThree) => {
		if (!srcThree) return null;

		if (altThree) {
			return <img className="gallery-image-3" src={srcThree} alt={altThree} />;
		}

		// if no alt selected
		return (
			<img
				className="gallery-image-3"
				src={srcThree}
				alt=""
				aria-hidden="true"
			/>
		);
	};
	return (
		<section className="teachers-section">
			<h2 className="teachers-title">{attributes.title}</h2>
			<p className="teachers-body-text">{attributes.body}</p>

			<div className="teachers-wrapper">
				<a href="#">
					<button className="carousel-button">{attributes.buttonLeft}</button>
				</a>

				<div className="teachers-card-1">
					{imageOne(attributes.imageUrlOne, attributes.imageAltOne)}
					<h3 className="teacher-title">{attributes.teacherNameOne}</h3>
				</div>

				<div className="teachers-card-2">
					{imageTwo(attributes.imageUrlTwo, attributes.imageAltTwo)}
					<h3 className="teacher-title">{attributes.teacherNameTwo}</h3>
				</div>

				<div className="teachers-card-3">
					{imageThree(attributes.imageUrlThree, attributes.imageAltThree)}
					<h3 className="teacher-title">{attributes.teacherNameThree}</h3>
				</div>

				<a href="#">
					<button className="carousel-button">{attributes.buttonRight}</button>
				</a>
			</div>
		</section>
	);
}
