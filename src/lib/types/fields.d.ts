export interface BaseFormField {
  id: string
  type: string
  label: string
  subLabel?: string
  value: string
  fieldName: string
  placeholder?: string
  required?: boolean | undefined
  options?: Array<Option>
  displayType?: IDisplayType
  data?: {
    left: any
    right: any
  }
  columnId?: string
}

export type IDisplayType = 'horizontal' | 'vertical'

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

export type FormField = BaseFormField
