/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ [
					[ 'core/heading', { level: 2, placeholder: 'Information Title', className: 'info-title' } ],
					[ 'core/column', { className: 'box-container' },
					[
					[ 'core/columns', { className: 'box-group-1' },
						[
							[ 'core/column', { className: 'box-1'}, [
									[ 'core/image', { level: 3, placeholder: 'Information Image 1' } ],
								]
							],
							[ 'core/column', { className: 'box-2'}, [
									[ 'core/paragraph', { level: 3, placeholder: 'Information Text 1', className: 'box-text' } ],
									[ 'core/button', { placeholder: 'Button Text', className: 'read-more-button' } ],
								]
							],
						]
					],
					[ 'core/columns', { className: 'box-group-2' },
					[
						[ 'core/column', { className: 'box-3'}, [
							[ 'core/paragraph', { level: 3, placeholder: 'Information Text 2', className: 'box-text' } ],
							[ 'core/button', { placeholder: 'Button Text', className: 'read-more-button' } ],
						]
					],
						[ 'core/column', { className: 'box-4'}, [
								[ 'core/image', { level: 3, placeholder: 'Information Image 2' } ],
							]
						],
					]
					],
					[ 'core/columns', { className: 'box-group-3' },
					[
						[ 'core/column', { className: 'box-5'}, [
								[ 'core/image', { level: 3, placeholder: 'Information Image 3' } ],
							]
						],
						[ 'core/column', { className: 'box-6'}, [
								[ 'core/paragraph', { level: 3, placeholder: 'Information Text 3', className: 'box-text' } ],
								[ 'core/button', { placeholder: 'Button Text', className: 'read-more-button' } ],
							]
						],
					]
					],
				]
			],
				] }
			/>
		</div>
	);
}
