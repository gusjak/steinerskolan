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
					className="card-image-1"
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
					className="card-image-2"
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
					className="card-image-3"
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
			{/* Title */}
			<RichText
				key="editable"
				tagname="h2"
				placeholder="Section Title"
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				className="secondary-header"
			/>
			{/* Body Text */}
			<RichText
				key="editable"
				tagname="p"
				placeholder="Section Text"
				value={attributes.body}
				onChange={(newBody) => setAttributes({ body: newBody })}
				className="body-text"
			/>

			{/* Teachers Wrapper */}
			<div className="cards-wrapper">
				{/* Card 1 */}
				<div className="card-1">
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
						placeholder="Card Title 1"
						value={attributes.cardTitleOne}
						onChange={(newcardTitleOne) =>
							setAttributes({ cardTitleOne: newcardTitleOne })
						}
						className="third-header"
					/>
				</div>
				{/* Card 2 */}
				<div className="card-2">
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
						placeholder="Card Title 2"
						value={attributes.cardTitleTwo}
						onChange={(newcardTitleTwo) =>
							setAttributes({ cardTitleTwo: newcardTitleTwo })
						}
						className="third-header"
					/>
				</div>
				{/* Card 3 */}
				<div className="card-3">
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
						placeholder="Card Title 3"
						value={attributes.cardTitleThree}
						onChange={(newcardTitleThree) =>
							setAttributes({ cardTitleThree: newcardTitleThree })
						}
						className="third-header"
					/>
				</div>
			</div>
		</div>
	);
}
