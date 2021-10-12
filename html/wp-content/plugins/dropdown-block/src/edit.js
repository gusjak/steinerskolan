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
	return (
		<div {...useBlockProps()}>
			{/* Title */}
			<RichText
				key="editable"
				tagname="h2"
				placeholder="Title"
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				className="secondary-header"
			/>

			{/* Dropdown */}
			<div className="drop-down-wrapper">
				{/* 1 */}
				<div className="drop-down-bar-1">
					<div className="colored-edge-1"></div>
					<h3 className="third-header">Årskurs 1</h3>
					<Button className="drop-down-button-1"></Button>
				</div>
				<div className="drop-down-content-box-1">
					<RichText
						key="editable"
						tagname="p"
						placeholder="First Box Text"
						value={attributes.dropDownTextOne}
						onChange={(newdropDownTextOne) =>
							setAttributes({ dropDownTextOne: newdropDownTextOne })
						}
						className="box-text"
					/>
				</div>

				{/* 2 */}
				<div className="drop-down-bar-2">
					<div className="colored-edge-2"></div>
					<h3 className="third-header">Årskurs 2</h3>
					<Button className="drop-down-button-2"></Button>
				</div>
				<div className="drop-down-content-box-2">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Second Box Text"
						value={attributes.dropDownTextTwo}
						onChange={(newdropDownTextTwo) =>
							setAttributes({ dropDownTextTwo: newdropDownTextTwo })
						}
						className="box-text"
					/>
				</div>

				{/* 3 */}
				<div className="drop-down-bar-3">
					<div className="colored-edge-3"></div>
					<h3 className="third-header">Årskurs 3</h3>
					<Button className="drop-down-button-3"></Button>
				</div>
				<div className="drop-down-content-box-3">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Third Box Text"
						value={attributes.dropDownTextThree}
						onChange={(newdropDownTextThree) =>
							setAttributes({ dropDownTextThree: newdropDownTextThree })
						}
						className="box-text"
					/>
				</div>

				{/* 4 */}
				<div className="drop-down-bar-4">
					<div className="colored-edge-4"></div>
					<h3 className="third-header">Årskurs 4</h3>
					<Button className="drop-down-button-4"></Button>
				</div>
				<div className="drop-down-content-box-4">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Fourth Box Text"
						value={attributes.dropDownTextFour}
						onChange={(newdropDownTextFour) =>
							setAttributes({ dropDownTextFour: newdropDownTextFour })
						}
						className="box-text"
					/>
				</div>

				{/* 5 */}
				<div className="drop-down-bar-5">
					<div className="colored-edge-5"></div>
					<h3 className="third-header">Årskurs 5</h3>
					<Button className="drop-down-button-5"></Button>
				</div>
				<div className="drop-down-content-box-5">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Fifth Box Text"
						value={attributes.dropDownTextFive}
						onChange={(newdropDownTextFive) =>
							setAttributes({ dropDownTextFive: newdropDownTextFive })
						}
						className="box-text"
					/>
				</div>

				{/* 6 */}
				<div className="drop-down-bar-6">
					<div className="colored-edge-6"></div>
					<h3 className="third-header">Årskurs 6</h3>
					<Button className="drop-down-button-6"></Button>
				</div>
				<div className="drop-down-content-box-6">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Sixth Box Text"
						value={attributes.dropDownTextSix}
						onChange={(newdropDownTextSix) =>
							setAttributes({ dropDownTextSix: newdropDownTextSix })
						}
						className="box-text"
					/>
				</div>

				{/* 7 */}
				<div className="drop-down-bar-7">
					<div className="colored-edge-7"></div>
					<h3 className="third-header">Årskurs 7</h3>
					<Button className="drop-down-button-7"></Button>
				</div>
				<div className="drop-down-content-box-7">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Seventh Box Text"
						value={attributes.dropDownTextSeven}
						onChange={(newdropDownTextSeven) =>
							setAttributes({ dropDownTextSeven: newdropDownTextSeven })
						}
						className="box-text"
					/>
				</div>

				{/* 8 */}
				<div className="drop-down-bar-8">
					<div className="colored-edge-8"></div>
					<h3 className="third-header">Årskurs 8</h3>
					<Button className="drop-down-button-8"></Button>
				</div>
				<div className="drop-down-content-box-8">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Eighth Box Text"
						value={attributes.dropDownTextEight}
						onChange={(newdropDownTextEight) =>
							setAttributes({ dropDownTextEight: newdropDownTextEight })
						}
						className="box-text"
					/>
				</div>

				{/* 9 */}
				<div className="drop-down-bar-9">
					<div className="colored-edge-9"></div>
					<h3 className="third-header">Årskurs 9</h3>
					<Button className="drop-down-button-9"></Button>
				</div>
				<div className="drop-down-content-box-9">
					<RichText
						key="editable"
						tagname="p"
						placeholder="Ninth Box Text"
						value={attributes.dropDownTextNine}
						onChange={(newdropDownTextNine) =>
							setAttributes({ dropDownTextNine: newdropDownTextNine })
						}
						className="box-text"
					/>
				</div>
			</div>
		</div>
	);
}
