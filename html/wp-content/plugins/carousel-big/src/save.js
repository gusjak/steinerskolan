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
	const image = (src, alt) => {
		if (!src) return null;

		if (alt) {
			return <img className="student-image" src={src} alt={alt} />;
		}

		// if no alt selected
		return (
			<img className="student-image" src={src} alt="" aria-hidden="true" />
		);
	};
	return (
		<section className="former-students-section">
			<h2 className="former-students-title">{attributes.title}</h2>
			<div className="former-students-wrapper">
				<a href="#">
					<button className="carousel-button">{attributes.buttonLeft}</button>
				</a>

				<div className="former-students-container">
					<div className="former-students-image-container">
						{image(attributes.imageUrl, attributes.imageAlt)}
					</div>
					<div className="former-student-info">
						<h3 className="header-big">{attributes.studentName}</h3>
						<p className="student-body-text">{attributes.bodyProfession}</p>

						<h3 className="header">{attributes.questionOne}</h3>
						<p className="student-body-text">{attributes.bodyAnswerOne}</p>
						<h3 className="header">{attributes.questionTwo}</h3>
						<p className="student-body-text">{attributes.bodyAnswerTwo}</p>

						<h3 className="header">{attributes.date}</h3>
					</div>
				</div>

				<a href="#">
					<button className="carousel-button">{attributes.buttonRight}</button>
				</a>
			</div>
		</section>
	);
}
