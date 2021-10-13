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
import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";

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
	return (
		<div {...useBlockProps()}>
			<div className="contact-wrapper">
				{/* Main Title */}
				<PlainText
					placeholder="Title"
					value={attributes.titleOne}
					onChange={(newTitleOne) => setAttributes({ titleOne: newTitleOne })}
					className="secondary-header"
				/>

				{/* Top */}
				<div className="top-box">
					<div className="top-left-box">
						<PlainText
							placeholder="Title"
							value={attributes.titleTwo}
							onChange={(newTitleTwo) =>
								setAttributes({ titleTwo: newTitleTwo })
							}
							className="info-header-1"
						/>
						<RichText
							placeholder="Body Text"
							value={attributes.bodyOne}
							onChange={(newBodyOne) => setAttributes({ bodyOne: newBodyOne })}
							multiline="p"
						/>
					</div>

					<div className="top-right-box">
						{/* Second Body */}
						<PlainText
							placeholder="Title"
							value={attributes.titleThree}
							onChange={(newTitleThree) =>
								setAttributes({ titleThree: newTitleThree })
							}
							className="info-header-2"
						/>
						<RichText
							placeholder="Body Text"
							value={attributes.bodyTwo}
							onChange={(newBodyTwo) => setAttributes({ bodyTwo: newBodyTwo })}
							multiline="p"
						/>
					</div>
				</div>

				{/* Middle */}
				<div className="middle-box">
					<div className="middle-left-box">
						{/* Third Body */}
						<PlainText
							placeholder="Title"
							value={attributes.titleFour}
							onChange={(newTitleFour) =>
								setAttributes({ titleFour: newTitleFour })
							}
							className="info-header-3"
						/>
						<RichText
							placeholder="Body Text"
							value={attributes.bodyThree}
							onChange={(newBodyThree) =>
								setAttributes({ bodyThree: newBodyThree })
							}
							multiline="p"
						/>
					</div>
					<div className="middle-right-box">
						{/* Fourth Body */}
						<PlainText
							placeholder="Title"
							value={attributes.titleFive}
							onChange={(newTitleFive) =>
								setAttributes({ titleFive: newTitleFive })
							}
							className="info-header-4"
						/>
						<RichText
							placeholder="Body Text"
							value={attributes.bodyFour}
							onChange={(newBodyFour) =>
								setAttributes({ bodyFour: newBodyFour })
							}
							multiline="p"
						/>
					</div>
				</div>

				{/* Bottom */}
				<div className="bottom-box">
					<div className="bottom-left-box">
						{/* Third Body */}
						<PlainText
							placeholder="Title"
							value={attributes.titleSix}
							onChange={(newTitleSix) =>
								setAttributes({ titleSix: newTitleSix })
							}
							className="info-header-5"
						/>
						<RichText
							placeholder="Body Text"
							value={attributes.bodyFive}
							onChange={(newBodyFive) =>
								setAttributes({ bodyFive: newBodyFive })
							}
							multiline="p"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
