/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoFgNARATAdArDADBSBGEiQGY4gGwAcUWBBA7JqlAagJxR560F6KKpxaZS2OkoQApgDsUiMMFRhx4qbIC6kMgQAmTEADMI8oA===
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './App.css';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDYzMTY3OTksImp0aSI6IjBjMmZkZjZlLTdkNDMtNDAwZC04ZmZkLWJkNmI2MGExNGM5MiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjE4Y2VlMzdlIn0.ujrTqI39dWVQTkXwTgGtKBwUKDLZWKyYjcvoYBVab-JxuKRWcrNG-kh1mDyhCcSbEK-eluBBP_7K6utjydVlEg';

const CLOUD_SERVICES_TOKEN_URL =
	'https://i3wu7b91typa.cke-cs.com/token/dev/7bcd75e78d79d5ab7342e648c2f384ea1bb8b4bb446725abbd2104ad9b4f?limit=10';

export default function App() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const cloud = useCKEditorCloud({ version: '45.0.0', premium: true, ckbox: { version: '2.6.1' } });

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const { ClassicEditor, editorConfig } = useMemo(() => {
		if (cloud.status !== 'success' || !isLayoutReady) {
			return {};
		}

		const {
			ClassicEditor,
			Autoformat,
			AutoImage,
			AutoLink,
			Autosave,
			Bold,
			CKBox,
			CKBoxImageEdit,
			CloudServices,
			Code,
			CodeBlock,
			Emoji,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			GeneralHtmlSupport,
			Heading,
			Highlight,
			HtmlComment,
			HtmlEmbed,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			Mention,
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			ShowBlocks,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Underline
		} = cloud.CKEditor;
		const { PasteFromOfficeEnhanced, SourceEditingEnhanced } = cloud.CKEditorPremiumFeatures;

		return {
			ClassicEditor,
			editorConfig: {
				toolbar: {
					items: [
						'sourceEditingEnhanced',
						'showBlocks',
						'|',
						'heading',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'strikethrough',
						'subscript',
						'superscript',
						'code',
						'removeFormat',
						'|',
						'emoji',
						'link',
						'insertImage',
						'ckbox',
						'insertTable',
						'highlight',
						'codeBlock',
						'htmlEmbed',
						'|',
						'bulletedList',
						'numberedList'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
					Autoformat,
					AutoImage,
					AutoLink,
					Autosave,
					Bold,
					CKBox,
					CKBoxImageEdit,
					CloudServices,
					Code,
					CodeBlock,
					Emoji,
					Essentials,
					FontBackgroundColor,
					FontColor,
					FontFamily,
					FontSize,
					GeneralHtmlSupport,
					Heading,
					Highlight,
					HtmlComment,
					HtmlEmbed,
					ImageBlock,
					ImageCaption,
					ImageInline,
					ImageInsert,
					ImageInsertViaUrl,
					ImageResize,
					ImageStyle,
					ImageTextAlternative,
					ImageToolbar,
					ImageUpload,
					Italic,
					Link,
					LinkImage,
					List,
					ListProperties,
					Mention,
					Paragraph,
					PasteFromOffice,
					PasteFromOfficeEnhanced,
					PictureEditing,
					RemoveFormat,
					ShowBlocks,
					SourceEditingEnhanced,
					Strikethrough,
					Subscript,
					Superscript,
					Table,
					TableCaption,
					TableCellProperties,
					TableColumnResize,
					TableProperties,
					TableToolbar,
					TextTransformation,
					Underline
				],
				cloudServices: {
					tokenUrl: CLOUD_SERVICES_TOKEN_URL
				},
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
				},
				htmlSupport: {
					allow: [
						{
							name: /^.*$/,
							styles: true,
							attributes: true,
							classes: true
						}
					]
				},
				image: {
					toolbar: [
						'toggleImageCaption',
						'imageTextAlternative',
						'|',
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'resizeImage',
						'|',
						'ckboxImageEdit'
					]
				},
				initialData:
					'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
				licenseKey: LICENSE_KEY,
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true
					}
				},
				mention: {
					feeds: [
						{
							marker: '@',
							feed: [
								/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
							]
						}
					]
				},
				placeholder: 'Type or paste your content here!',
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
				}
			}
		};
	}, [cloud, isLayoutReady]);

	useEffect(() => {
		if (editorConfig) {
			configUpdateAlert(editorConfig);
		}
	}, [editorConfig]);

	return (
		<div className="main-container">
			<div className="editor-container editor-container_classic-editor" ref={editorContainerRef}>
				<div className="editor-container__editor">
					<div ref={editorRef}>{ClassicEditor && editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}</div>
				</div>
			</div>
		</div>
	);
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
	if (configUpdateAlert.configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue, forbiddenValue) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	configUpdateAlert.configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
		valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'to receive full access to Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}
}
