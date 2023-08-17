/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Autosave } from '@ckeditor/ckeditor5-autosave'
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support'
import { AutoImage, Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { AutoLink, Link } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { Style } from '@ckeditor/ckeditor5-style'
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
declare class Editor extends ClassicEditor {
  static builtinPlugins: (
    | typeof Alignment
    | typeof TextTransformation
    | typeof Autoformat
    | typeof Autosave
    | typeof Bold
    | typeof Italic
    | typeof Strikethrough
    | typeof Underline
    | typeof BlockQuote
    | typeof CloudServices
    | typeof Essentials
    | typeof FontBackgroundColor
    | typeof FontColor
    | typeof FontFamily
    | typeof FontSize
    | typeof Paragraph
    | typeof Heading
    | typeof GeneralHtmlSupport
    | typeof AutoImage
    | typeof Image
    | typeof ImageCaption
    | typeof ImageStyle
    | typeof ImageToolbar
    | typeof ImageUpload
    | typeof Indent
    | typeof AutoLink
    | typeof Link
    | typeof List
    | typeof MediaEmbed
    | typeof PasteFromOffice
    | typeof RemoveFormat
    | typeof Style
    | typeof Table
    | typeof TableToolbar
    | typeof WordCount
  )[]
  static defaultConfig: {
    toolbar: {
      items: string[]
    }
    language: string
    image: {
      toolbar: string[]
    }
    table: {
      contentToolbar: string[]
    }
  }
}
export default Editor
