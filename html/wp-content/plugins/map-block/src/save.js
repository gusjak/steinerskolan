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
export default function save() {
	return (
		<section class="contact-section">
			<div className="contact-wrapper">
				<h2 class="secondary-header">Hitta hit!</h2>

				<div className="top-box">
					<div className="top-left-box">
						<p>
							Rudolf Steinerskolan är belägen på en höjd med underbar utsikt
							över staden. Runtom finns tallskog och bergsknallar, här kan man
							tidiga morgnar stöta på harar och rådjur. Skolgården är naturligt
							belägen i denna miljö. Skolan är liten och trivsam, med elever
							från i förskoleklassen och första klass till klass nio, och ett
							fritidshem i Gula Villan, fritidshemmet är vackert belägen i
							Renströmska parken.
						</p>
						<p>
							Lättast tar du dig hit med buss 17 som har slutstation Östra
							Sjukhuset. Hållplatsen där ni stiger av heter: Bovallstrandsgatan.
							Från denna går ni upp mot Tallhöjdsgatan, en gångsträcka på ca 400
							m.
						</p>
					</div>
					<div className="top-right-box">
						<div class="mapouter">
							<div class="gmap_canvas">
								<iframe
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=tallh%C3%B6jdsgatan,%201&t=k&z=13&ie=UTF8&iwloc=&output=embed"
									frameborder="0"
									scrolling="no"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
