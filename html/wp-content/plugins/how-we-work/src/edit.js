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
	const getImageButtonOne = (openEventOne) => {
		if (attributes.imageUrlOne) {
			return (
				<img
					src={attributes.imageUrlOne}
					onClick={openEventOne}
					className="color-blot-1"
				/>
			);
		} else {
			return (
				<div className="button-container">
					<Button onClick={openEventOne} className="button button-large">
						Pick an image
					</Button>
				</div>
			);
		}
	};

	const getImageButtonTwo = (openEventTwo) => {
		if (attributes.imageUrlTwo) {
			return (
				<img
					src={attributes.imageUrlTwo}
					onClick={openEventTwo}
					className="color-blot-2"
				/>
			);
		} else {
			return (
				<div className="button-container">
					<Button onClick={openEventTwo} className="button button-large">
						Pick an image
					</Button>
				</div>
			);
		}
	};

	const getImageButtonThree = (openEventThree) => {
		if (attributes.imageUrlThree) {
			return (
				<img
					src={attributes.imageUrlThree}
					onClick={openEventThree}
					className="color-blot-3"
				/>
			);
		} else {
			return (
				<div className="button-container">
					<Button onClick={openEventThree} className="button button-large">
						Pick an image
					</Button>
				</div>
			);
		}
	};
	const getImageButtonFour = (openEventFour) => {
		if (attributes.imageUrlFour) {
			return (
				<img
					src={attributes.imageUrlFour}
					onClick={openEventFour}
					className="color-blot-4"
				/>
			);
		} else {
			return (
				<div className="button-container">
					<Button onClick={openEventFour} className="button button-large">
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
				placeholder="Section Title"
				value={attributes.mainTitle}
				onChange={(newMainTitle) => setAttributes({ mainTitle: newMainTitle })}
				className="secondary-header"
			/>
			{/* Box 1 */}
			<div className="box">
				<div className="box-left">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({ imageAltOne: media.alt, imageUrlOne: media.url });
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButtonOne(open)}
					/>
					<RichText
						key="editable"
						tagname="h3"
						placeholder="Box Title"
						value={attributes.leftTitleOne}
						onChange={(newLeftTitleOne) =>
							setAttributes({ leftTitleOne: newLeftTitleOne })
						}
						className="third-header"
					/>
				</div>

				<div className="box-right">
					<RichText
						key="editable"
						tagname="h4"
						placeholder="Sub Title"
						value={attributes.rightTitleOne}
						onChange={(newRightTitleOne) =>
							setAttributes({ rightTitleOne: newRightTitleOne })
						}
						className="fourth-header"
					/>
					<RichText
						key="editable"
						tagname="p"
						placeholder="Section Text"
						value={attributes.rightBodyOne}
						onChange={(newRightBodyOne) =>
							setAttributes({ rightBodyOne: newRightBodyOne })
						}
						className="body-text"
					/>
				</div>
			</div>

			{/* Box 2 */}
			<div className="box">
				<div className="box-left">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({ imageAltTwo: media.alt, imageUrlTwo: media.url });
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButtonTwo(open)}
					/>
					<RichText
						key="editable"
						tagname="h3"
						placeholder="Box Title"
						value={attributes.leftTitleTwo}
						onChange={(newLeftTitleTwo) =>
							setAttributes({ leftTitleTwo: newLeftTitleTwo })
						}
						className="third-header"
					/>
				</div>

				<div className="box-right">
					<RichText
						key="editable"
						tagname="h4"
						placeholder="Sub Title"
						value={attributes.rightTitleTwo}
						onChange={(newRightTitleTwo) =>
							setAttributes({ rightTitleTwo: newRightTitleTwo })
						}
						className="fourth-header"
					/>
					<RichText
						key="editable"
						tagname="p"
						placeholder="Section Text"
						value={attributes.rightBodyTwo}
						onChange={(newRightBodyTwo) =>
							setAttributes({ rightBodyTwo: newRightBodyTwo })
						}
						className="body-text"
					/>
				</div>
			</div>

			{/* Box 3 */}
			<div className="box">
				<div className="box-left">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								imageAltThree: media.alt,
								imageUrlThree: media.url,
							});
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButtonThree(open)}
					/>
					<RichText
						key="editable"
						tagname="h3"
						placeholder="Box Title"
						value={attributes.leftTitleThree}
						onChange={(newLeftTitleThree) =>
							setAttributes({ leftTitleThree: newLeftTitleThree })
						}
						className="third-header"
					/>
				</div>

				<div className="box-right">
					<RichText
						key="editable"
						tagname="h4"
						placeholder="Sub Title"
						value={attributes.rightTitleThree}
						onChange={(newRightTitleThree) =>
							setAttributes({ rightTitleThree: newRightTitleThree })
						}
						className="fourth-header"
					/>
					<RichText
						key="editable"
						tagname="p"
						placeholder="Section Text"
						value={attributes.rightBodyThree}
						onChange={(newRightBodyThree) =>
							setAttributes({ rightBodyThree: newRightBodyThree })
						}
						className="body-text"
					/>
				</div>
			</div>

			{/* Box 4 */}
			<div className="box">
				<div className="box-left">
					<MediaUpload
						onSelect={(media) => {
							setAttributes({
								imageAltFour: media.alt,
								imageUrlFour: media.url,
							});
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButtonFour(open)}
					/>
					<RichText
						key="editable"
						tagname="h3"
						placeholder="Box Title"
						value={attributes.leftTitleFour}
						onChange={(newLeftTitleFour) =>
							setAttributes({ leftTitleFour: newLeftTitleFour })
						}
						className="third-header"
					/>
				</div>

				<div className="box-right">
					<RichText
						key="editable"
						tagname="h4"
						placeholder="Sub Title"
						value={attributes.rightTitleFour}
						onChange={(newRightTitleFour) =>
							setAttributes({ rightTitleFour: newRightTitleFour })
						}
						className="fourth-header"
					/>
					<RichText
						key="editable"
						tagname="p"
						placeholder="Section Text"
						value={attributes.rightBodyFour}
						onChange={(newRightBodyFour) =>
							setAttributes({ rightBodyFour: newRightBodyFour })
						}
						className="body-text"
					/>
				</div>
			</div>
		</div>
	);
}
