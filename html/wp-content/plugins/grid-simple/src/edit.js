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
					className="kitchen-image-1"
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
					className="kitchen-image-2"
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
					className="kitchen-image-3"
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
	return (
		<div {...useBlockProps()}>
			<div className="box-container">
				{/* First Box Group */}
				<div className="box-group-1">
					{/* First Image Box */}
					<div className="box-1">
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									imageAltOne: media.alt,
									imageUrlOne: media.url,
								});
							}}
							type="image"
							value={attributes.imageID}
							render={({ open }) => getImageButtonOne(open)}
						/>
					</div>

					{/* First Text Box */}
					<div className="box-2">
						<RichText
							key="editable"
							tagname="p"
							placeholder="First Box Text"
							value={attributes.bodyOne}
							onChange={(newBodyOne) => setAttributes({ bodyOne: newBodyOne })}
							className="box-text-kitchen"
						/>
					</div>
				</div>

				{/* Second Box Group */}
				<div className="box-group-2">
					{/* Second Text Box */}
					<div className="box-3">
						<RichText
							key="editable"
							tagname="p"
							placeholder="Second Box Text"
							value={attributes.bodyTwo}
							onChange={(newBodyTwo) => setAttributes({ bodyTwo: newBodyTwo })}
							className="box-text-kitchen"
						/>
					</div>

					{/* Second Image Box */}
					<div className="box-4">
						<MediaUpload
							onSelect={(media) => {
								setAttributes({
									imageAltTwo: media.alt,
									imageUrlTwo: media.url,
								});
							}}
							type="image"
							value={attributes.imageID}
							render={({ open }) => getImageButtonTwo(open)}
						/>
					</div>
				</div>

				{/* Third Box Group */}
				<div className="box-group-3">
					{/* Third Image Box */}
					<div className="box-5">
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
					</div>

					{/* Third Text Box */}
					<div className="box-6">
						<RichText
							key="editable"
							tagname="p"
							placeholder="Third Box Text"
							value={attributes.bodyThree}
							onChange={(newBodyThree) =>
								setAttributes({ bodyThree: newBodyThree })
							}
							className="box-text-kitchen"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
