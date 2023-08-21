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
  }
}

export const getNewShortText = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.ShortText,
    label: ToolbarHeadingTypes.ShortText,
    value: FieldInitialValues.ShortText,
    fieldName: ToolbarHeadingTypes.ShortText,
  }
}

export const getNewLongText = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.LongText,
    label: ToolbarHeadingTypes.LongText,
    value: FieldInitialValues.LongText,
    fieldName: ToolbarHeadingTypes.LongText,
  }
}

export const getNewParagraph = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Paragraph,
    label: ToolbarHeadingTypes.Paragraph,
    value: FieldInitialValues.Paragraph,
    fieldName: ToolbarHeadingTypes.Paragraph,
  }
}

export const getNewDropdown = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Dropdown,
    label: ToolbarHeadingTypes.Dropdown,
    value: FieldInitialValues.Dropdown,
    fieldName: ToolbarHeadingTypes.Dropdown,
    options: defaultOptions,
  }
}

export const getNewSingleChoice = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.SingleChoice,
    label: ToolbarHeadingTypes.SingleChoice,
    value: FieldInitialValues.SingleChoice,
    fieldName: ToolbarHeadingTypes.SingleChoice,
    options: defaultOptions,
  }
}

export const getNewMultipleChoice = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.MultipleChoice,
    label: ToolbarHeadingTypes.MultipleChoice,
    value: FieldInitialValues.MultipleChoice,
    fieldName: ToolbarHeadingTypes.MultipleChoice,
    options: defaultOptions,
  }
}

export const getNewDate = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Date,
    label: ToolbarHeadingTypes.Date,
    value: FieldInitialValues.Date,
    fieldName: ToolbarHeadingTypes.Date,
  }
}

// write same for Image, file, linebreak and two column
export const getNewImage = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.Image,
    label: ToolbarHeadingTypes.Image,
    value: FieldInitialValues.Image,
    fieldName: ToolbarHeadingTypes.Image,
  }
}

export const getNewFile = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.File,
    label: ToolbarHeadingTypes.File,
    value: FieldInitialValues.File,
    fieldName: ToolbarHeadingTypes.File,
  }
}

export const getNewLineBreak = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.LineBreak,
    label: ToolbarHeadingTypes.LineBreak,
    value: FieldInitialValues.LineBreak,
    fieldName: ToolbarHeadingTypes.LineBreak,
  }
}

export const getNewTwoColumn = (): FormField => {
  return {
    id: uuid(),
    type: ToolbarItemTypes.TwoColumns,
    label: ToolbarHeadingTypes.TwoColumns,
    value: FieldInitialValues.TwoColumns,
    fieldName: ToolbarHeadingTypes.TwoColumns,
  }
}
