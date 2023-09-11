import { v4 as uuid } from 'uuid'
import { FieldInitialValues, ToolbarHeadingTypes, ToolbarItemTypes, defaultOptions } from '../types/constants'
import { FormField } from '../types/fields'

export const getNewHeading = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Heading,
    label: ToolbarHeadingTypes.Heading,
    value: FieldInitialValues.Heading,
    subLabel: 'Sub Heading',
    fieldName: ToolbarHeadingTypes.Heading,
    required: false,
  }
}

export const getNewShortText = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.ShortText,
    label: ToolbarHeadingTypes.ShortText,
    value: '',
    fieldName: ToolbarHeadingTypes.ShortText,
    required: false,
  }
}

export const getNewLongText = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.LongText,
    label: ToolbarHeadingTypes.LongText,
    value: '',
    fieldName: ToolbarHeadingTypes.LongText,
    required: false,
  }
}

export const getNewParagraph = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Paragraph,
    label: ToolbarHeadingTypes.Paragraph,
    value: FieldInitialValues.Paragraph,
    fieldName: ToolbarHeadingTypes.Paragraph,
    required: false,
  }
}

export const getNewDropdown = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Dropdown,
    label: ToolbarHeadingTypes.Dropdown,
    value: '',
    fieldName: ToolbarHeadingTypes.Dropdown,
    options: [...defaultOptions],
    required: false,
  }
}

export const getNewSingleChoice = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.SingleChoice,
    label: ToolbarHeadingTypes.SingleChoice,
    value: '',
    fieldName: ToolbarHeadingTypes.SingleChoice,
    options: [...defaultOptions],
    required: false,
  }
}

export const getNewMultipleChoice = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.MultipleChoice,
    label: ToolbarHeadingTypes.MultipleChoice,
    value: '',
    fieldName: ToolbarHeadingTypes.MultipleChoice,
    displayType: 'vertical',
    options: [...defaultOptions],
    required: false,
  }
}

export const getNewDate = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Date,
    label: ToolbarHeadingTypes.Date,
    value: '',
    fieldName: ToolbarHeadingTypes.Date,
    required: false,
  }
}

// write same for Image, file, linebreak and two column
export const getNewImage = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Image,
    label: ToolbarHeadingTypes.Image,
    value: '',
    fieldName: ToolbarHeadingTypes.Image,
    required: false,
  }
}

export const getNewFile = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.File,
    label: ToolbarHeadingTypes.File,
    value: '',
    fieldName: ToolbarHeadingTypes.File,
    required: false,
  }
}

export const getNewLineBreak = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.LineBreak,
    label: ToolbarHeadingTypes.LineBreak,
    value: '',
    fieldName: ToolbarHeadingTypes.LineBreak,
    required: false,
  }
}

export const getNewTwoColumn = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.TwoColumns,
    label: ToolbarHeadingTypes.TwoColumns,
    value: '',
    fieldName: ToolbarHeadingTypes.TwoColumns,
    data: {
      left: getNewSingleChoice(),
      right: getNewSingleChoice(),
    },
  }
}

export const itemToFunctionMap: any = {
  [ToolbarItemTypes.Heading]: getNewHeading,
  [ToolbarItemTypes.LongText]: getNewLongText,
  [ToolbarItemTypes.SingleChoice]: getNewSingleChoice,
  [ToolbarItemTypes.ShortText]: getNewShortText,
  [ToolbarItemTypes.Paragraph]: getNewParagraph,
  [ToolbarItemTypes.LineBreak]: getNewLineBreak,
  [ToolbarItemTypes.MultipleChoice]: getNewMultipleChoice,
  [ToolbarItemTypes.Date]: getNewDate,
  [ToolbarItemTypes.Dropdown]: getNewDropdown,
  [ToolbarItemTypes.Image]: getNewImage,
  [ToolbarItemTypes.File]: getNewFile,
  [ToolbarItemTypes.TwoColumns]: getNewTwoColumn,
}
