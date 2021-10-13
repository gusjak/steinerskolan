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
import { useBlockProps, RichText } from "@wordpress/block-editor";

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
			<div className="pink-box-wrapper">
				<div className="pink-box-wrapper-1">
					<div className="pink-box-1"></div>
					<div className="white-section">
						<RichText
							key="editable"
							tagname="h4"
							placeholder="Title"
							value={attributes.titleOne}
							onChange={(newTitleOne) =>
								setAttributes({ titleOne: newTitleOne })
							}
							className="fourth-header"
						/>
					</div>
				</div>

				<div className="pink-box-wrapper-2">
					<div className="pink-box-2"></div>
					<div className="white-section">
						<RichText
							key="editable"
							tagname="h4"
							placeholder="Title"
							value={attributes.titleTwo}
							onChange={(newTitleTwo) =>
								setAttributes({ titleTwo: newTitleTwo })
							}
							className="fourth-header"
						/>
					</div>
				</div>

				<div className="pink-box-wrapper-3">
					<div className="pink-box-3"></div>
					<div className="white-section">
						<RichText
							key="editable"
							tagname="h4"
							placeholder="Title"
							value={attributes.titleThree}
							onChange={(newTitleThree) =>
								setAttributes({ titleThree: newTitleThree })
							}
							className="fourth-header"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
