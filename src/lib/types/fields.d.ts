export interface BaseFormField {
  id: string
  type: string
  label: string
  subLabel?: string
  value: string
  fieldName: string
  placeholder?: string
  required?: boolean | undefined
}

export interface Option {
  label: string
  value: string
  selected: boolean
}

export interface OptionValueField extends BaseFormField {
  options: Array<Option>
}

export interface TextValueField extends BaseFormField {
  value: string
}

export type FormField = OptionValueField | TextValueField
