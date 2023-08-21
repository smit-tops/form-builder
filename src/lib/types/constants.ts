import { FormField, Option } from './fields'
import { IToolbarItem } from './toolbar'

export enum ToolbarItemTypes {
  Heading = 'heading',
  ShortText = 'shortText',
  LongText = 'longText',
  Paragraph = 'paragraph',
  Dropdown = 'dropdown',
  SingleChoice = 'singleChoice',
  MultipleChoice = 'multipleChoice',
  Date = 'date',
  Image = 'image',
  File = 'file',
  LineBreak = 'lineBreak',
  TwoColumns = 'twocolumns',
}

export enum ToolbarHeadingTypes {
  Heading = 'Heading',
  ShortText = 'Short Text',
  LongText = 'Long Text',
  Paragraph = 'Paragraph',
  Dropdown = 'Dropdown',
  SingleChoice = 'Single Choice',
  MultipleChoice = 'Multiple Choice',
  Date = 'Date',
  Image = 'Image',
  File = 'File',
  LineBreak = 'Line Break',
  TwoColumns = 'Two Columns',
}

export enum FieldInitialValues {
  Heading = 'Heading',
  ShortText = 'Short Text',
  LongText = 'Long Text',
  Paragraph = 'Paragraph',
  Dropdown = 'Dropdown',
  SingleChoice = 'Single Choice',
  MultipleChoice = 'Multiple Choice',
  Date = 'Date',
  Image = 'Image',
  File = 'File',
  LineBreak = 'Line Break',
  TwoColumns = 'Two Columns',
}

export const defaultOptions: Array<Option> = [
  {
    label: 'Option 1',
    value: 'option_1',
    selected: false,
  },
  {
    label: 'Option 2',
    value: 'option_2',
    selected: false,
  },
  {
    label: 'Option 3',
    value: 'option_3',
    selected: false,
  },
]

export const ToolbarItems: Array<IToolbarItem> = [
  {
    key: ToolbarItemTypes.Heading,
    value: ToolbarHeadingTypes.Heading,
    icon: 'fa-header',
  },

  {
    key: ToolbarItemTypes.LongText,
    value: ToolbarHeadingTypes.LongText,
    icon: 'fa-text-height',
  },

  {
    key: ToolbarItemTypes.ShortText,
    value: ToolbarHeadingTypes.ShortText,
    icon: 'fa-font',
  },
  {
    key: ToolbarItemTypes.Paragraph,
    value: ToolbarHeadingTypes.Paragraph,
    icon: 'fa-paragraph',
  },
  {
    key: ToolbarItemTypes.Dropdown,
    value: ToolbarHeadingTypes.Dropdown,
    icon: 'fa fa-solid fa-list-dropdown',
  },
  {
    key: ToolbarItemTypes.LineBreak,
    value: ToolbarHeadingTypes.LineBreak,
    icon: 'fa-arrows-h',
  },
  {
    key: ToolbarItemTypes.SingleChoice,
    value: ToolbarHeadingTypes.SingleChoice,
    icon: 'fa-dot-circle',
  },
  {
    key: ToolbarItemTypes.MultipleChoice,
    value: ToolbarHeadingTypes.MultipleChoice,
    icon: 'fa-check-square',
  },
  {
    key: ToolbarItemTypes.Date,
    value: ToolbarHeadingTypes.Date,
    icon: 'fa-calendar',
  },
  {
    key: ToolbarItemTypes.Image,
    value: ToolbarHeadingTypes.Image,
    icon: 'fa-image',
  },
  {
    key: ToolbarItemTypes.File,
    value: ToolbarHeadingTypes.File,
    icon: 'fa-file',
  },
  // {
  //   key: ToolbarItemTypes.,
  //  ToolbarItemTypes.,
  //   icon: 'fa fa-user',
  // },
  {
    key: ToolbarItemTypes.TwoColumns,
    value: ToolbarHeadingTypes.TwoColumns,
    icon: 'fa-columns',
  },
]

export const mockForm: Array<FormField> = [
  {
    id: '1',
    type: 'heading',
    label: 'Heading',
    value: 'Heading',
    subLabel: 'Sub Label',
    fieldName: 'Heading',
    required: false,
  },
  {
    id: '2',
    type: 'shortText',
    label: 'Short Text',
    value: 'Short Text',
    fieldName: 'Short Text',
    required: false,
  },
  {
    id: '3',
    type: 'longText',
    label: 'Long Text',
    value: 'Long Text',
    fieldName: 'Long Text',
    required: false,
  },
  // {
  //   id: 4,
  //   type: 'paragraph',
  //   label: 'Paragraph',
  //   value: 'Paragraph',
  //   fieldName: 'Paragraph',
  //   required: false,
  // },
  // {
  //   id: 5,
  //   type: 'dropdown',

  //   label: 'Dropdown',
  //   value: 'Dropdown',
  //   fieldName: 'Dropdown',
  //   required: false,
  //   options: defaultOptions,
  // },
  // {
  //   id: 6,
  //   type: 'singleChoice',
  //   label: 'Single Choice',
  //   value: 'Single Choice',
  //   fieldName: 'Single Choice',
  //   required: false,
  //   options: defaultOptions,
  // },
  // {
  //   id: 7,
  //   type: 'multipleChoice',
  //   label: 'Multiple Choice',
  //   value: 'Multiple Choice',
  //   fieldName: 'Multiple Choice',
  //   required: false,
  //   options: defaultOptions,
  // },
  // {
  //   id: 9,
  //   type: 'date',
  //   label: 'Date',
  //   value: 'Date',
  //   fieldName: 'Date',
  //   required: false,
  // },

  // {
  //   id: 10,
  //   type: 'image',
  //   label: 'Image',
  //   value: 'Image',
  //   fieldName: 'Image',
  //   required: false,
  // },
  // {
  //   id: 11,
  //   type: 'file',
  //   label: 'File',
  //   value: 'File',
  //   fieldName: 'File',
  //   required: false,
  // },
  // {
  //   id: 12,
  //   type: 'lineBreak',
  //   label: 'Line Break',
  //   value: 'Line Break',
  //   fieldName: 'Line Break',
  //   required: false,
  // },
  // {
  //   id: 13,
  //   type: 'twoColumns',
  //   label: 'Two Columns',
  //   value: 'Two Columns',
  //   fieldName: 'Two Columns',
  //   required: false,
  // },
]
