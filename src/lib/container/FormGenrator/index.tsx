import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ToolbarSection from '../../components/FormGenrator/ToolbarSection'
import FieldEditSection from '../../components/FormGenrator'
import { FormGenratorContext } from '../../context/FormContext'
import { v4 as uuid } from 'uuid'
import { FormField } from '../../types/fields'
import { IToolbarItem } from '../../types/toolbar'

interface FormGeneratorProps {
  data?: FormField[]
  onChange?: (data: FormField[]) => void
  toolBar?: IToolbarItem[]
}

export const FormGenrator: React.FC<FormGeneratorProps> = ({ data = [], onChange, toolBar = [] }) => {
  const [formData, setFormData] = useState<FormField[]>(data)

  useEffect(() => {
    setFormData(data ?? [])
  }, [data])

  const handleChangeFormData = useCallback(
    (newFormData: FormField[]) => {
      setFormData(newFormData)
      if (onChange) onChange(newFormData)
    },
    [onChange],
  )

  const value = useMemo(
    () => ({
      formData,
      setFormData,
      handleChangeFormData,
      toolBar,
      handleFieldChange: (newField: FormField) => {
        const newFormData = formData.map((field) => (field.id === newField.id ? newField : field))
        handleChangeFormData(newFormData)
      },
      handleRemoveField: (fieldId: string) => {
        const newFormData = formData.filter((field) => field.id !== fieldId)
        handleChangeFormData(newFormData)
      },
      handleCopyComponent: (id: string) => {
        const index = formData.findIndex((field) => field.id === id)
        if (index === -1) return
        const newField: FormField = { ...formData[index], id: uuid() }
        const newFormData = [...formData.slice(0, index + 1), newField, ...formData.slice(index + 1)]
        handleChangeFormData(newFormData)
      },
    }),
    [formData, setFormData, handleChangeFormData, toolBar],
  )

  return (
    <FormGenratorContext.Provider value={value}>
      <div className="form-builder">
        <div className="d-flex">
          <ToolbarSection />
          <FieldEditSection />
        </div>
      </div>
    </FormGenratorContext.Provider>
  )
}
