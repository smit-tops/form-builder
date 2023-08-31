import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ToolbarSection from '../../components/FormGenrator/ToolbarSection'
import FieldEditSection from '../../components/FormGenrator'
import { FormField } from '../../types/fields'
import { FormGenratorContext } from '../../context/FormContext'
import { IToolbarItem } from '../../types/toolbar'
import { v4 as uuid } from 'uuid'

export const FormGenrator = ({
  data,
  onChange,
  toolBar,
}: {
  data?: Array<FormField>
  onChange?: (data: Array<FormField>) => void
  toolBar?: Array<IToolbarItem>
}) => {
  const [formData, setFormData] = useState<Array<FormField>>([])

  useEffect(() => {
    if (data) setFormData(data ?? [])
  }, [data])

  const handleChangeFormData = useCallback(
    (newFormData: Array<FormField>) => {
      setFormData(newFormData)
      if (onChange) onChange(newFormData)
    },
    [onChange],
  )

  const handleRemoveField = useCallback(
    (fieldId: string) => {
      const newFormData = formData.filter((field) => field.id !== fieldId)
      handleChangeFormData(newFormData)
    },
    [formData, handleChangeFormData],
  )

  const handleCopyComponent = useCallback(
    (id: string) => {
      const field = formData.find((field) => field.id === id)
      if (!field) return
      const index = formData.findIndex((field) => field.id === id)
      const newField = { ...field, id: uuid() }
      const newFormData = [...formData]
      newFormData.splice(index + 1, 0, newField)
      handleChangeFormData(newFormData)
    },
    [formData, handleChangeFormData],
  )

  const handleFieldChange = useCallback(
    (fnewField: FormField) => {
      const newFormData = formData.map((field) => {
        if (field.id === fnewField.id) {
          return fnewField
        }
        return field
      })
      handleChangeFormData(newFormData)
    },
    [handleChangeFormData, formData],
  )

  const value = useMemo(
    () => ({
      formData,
      setFormData,
      handleChangeFormData,
      toolBar,
      handleFieldChange,
      handleRemoveField,
      handleCopyComponent,
    }),
    [formData, setFormData, handleChangeFormData, toolBar, handleFieldChange, handleRemoveField, handleCopyComponent],
  )

  return (
    <FormGenratorContext.Provider value={value}>
      <div>
        <div className="form-builder">
          <div className="d-flex">
            <ToolbarSection />
            <FieldEditSection />
          </div>
        </div>
      </div>
    </FormGenratorContext.Provider>
  )
}
