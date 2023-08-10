import { createContext } from 'react'
import { IToolbarItem } from '../types/toolbar'
import { FormField } from '../types/fields'

export type FormGenratorContextType = {
  formData?: Array<FormField>
  setFormData?: any
  handleChangeFormData?: any
  toolBar?: Array<IToolbarItem>
  provider?: any
  setProvider?: any
}

export const FormGenratorContext = createContext<FormGenratorContextType>({
  formData: [],
  setFormData: () => {},
  handleChangeFormData: () => {},
  toolBar: [],
  provider: null,
  setProvider: () => {},
})
