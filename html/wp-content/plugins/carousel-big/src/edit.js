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
import { useBlockProps, RichText, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const getImageButton = (openEvent) => {
		if (attributes.imageUrl) {
			return (
				<img
					src={attributes.imageUrl}
					onClick={openEvent}
					className="student-image"
				/>
			);
		} else {
			return (
				<div className="button-container">
					<Button onClick={openEvent} className="button button-large">
						Pick an image
					</Button>
				</div>
			);
		}
	};
	return (
		<div {...useBlockProps()}>
			{/* Title */}
			<RichText
				key="editable"
				tagname="h2"
				placeholder="Former Students Title"
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				className="former-students-title"
			/>

			<div className="former-students-wrapper">
				{/* Left Button */}
				<RichText
					key="editable"
					tagname="button"
					placeholder="<"
					value={attributes.buttonLeft}
					onChange={(newButtonLeft) =>
						setAttributes({ buttonLeft: newButtonLeft })
					}
					className="carousel-button"
				/>

				{/* Student Container */}
				<div className="former-students-container">
					<div className="former-students-image-container">
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									imageAlt: media.alt,
									imageUrl: media.url,
								});
							}}
							type="image"
							value={attributes.imageID}
							render={({ open }) => getImageButton(open)}
							className="student-image"
						/>
					</div>
					<div className="former-student-info">
						{/* Name + Profession */}
						<RichText
							key="editable"
							tagname="h3"
							placeholder="Former Student's Name"
							value={attributes.studentName}
							onChange={(newStudentName) =>
								setAttributes({ studentName: newStudentName })
							}
							className="header-big"
						/>
						<RichText
							key="editable"
							tagname="p"
							placeholder="Student's Profession"
							value={attributes.bodyProfession}
							onChange={(newBodyProfession) =>
								setAttributes({ bodyProfession: newBodyProfession })
							}
							className="student-body-text"
						/>

						{/* Question 1 + Answer 1 */}
						<RichText
							key="editable"
							tagname="h3"
							placeholder="Question 1"
							value={attributes.questionOne}
							onChange={(newQuestionOne) =>
								setAttributes({ questionOne: newQuestionOne })
							}
							className="header"
						/>
						<RichText
							key="editable"
							tagname="p"
							placeholder="Answer 1"
							value={attributes.bodyAnswerOne}
							onChange={(newBodyAnswerOne) =>
								setAttributes({ bodyAnswerOne: newBodyAnswerOne })
							}
							className="student-body-text"
						/>

						{/* Question 2 + Answer 2 */}
						<RichText
							key="editable"
							tagname="h3"
							placeholder="Question 2"
							value={attributes.questionTwo}
							onChange={(newQuestionTwo) =>
								setAttributes({ questionTwo: newQuestionTwo })
							}
							className="header"
						/>
						<RichText
							key="editable"
							tagname="p"
							placeholder="Answer 2"
							value={attributes.bodyAnswerTwo}
							onChange={(newBodyAnswerTwo) =>
								setAttributes({ bodyAnswerTwo: newBodyAnswerTwo })
							}
							className="student-body-text"
						/>

						{/* Date */}
						<RichText
							key="editable"
							tagname="h3"
							placeholder="10 oktober 2021"
							value={attributes.date}
							onChange={(newDate) => setAttributes({ date: newDate })}
							className="header"
						/>
					</div>
				</div>

				{/* Right Button */}
				<RichText
					key="editable"
					tagname="button"
					placeholder=">"
					value={attributes.buttonRight}
					onChange={(newButtonRight) =>
						setAttributes({ buttonRight: newButtonRight })
					}
					className="carousel-button"
				/>
			</div>
		</div>
	);
}
