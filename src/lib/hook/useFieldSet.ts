import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FormField } from '../types/fields'
import { FormGenratorContext } from '../context/FormContext'

const useFieldSet = (field: FormField, onChange: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editField, setEditField] = useState<FormField>(field)
  const { handleFieldChange: fieldChange, handleRemoveField, formData } = useContext(FormGenratorContext)

  useEffect(() => {
    if (isEdit) setEditField(field)
  }, [isEdit])

  const handleEdit = useCallback(() => {
    if (!isEdit) {
      setEditField(field)
      setIsEdit(true)
    }
  }, [isEdit, setIsEdit])

  const handleSave = useCallback(
    (newField: any) => {
      fieldChange(newField || editField)
      setIsEdit(false)
    },
    [editField, setIsEdit, fieldChange],
  )

  const handleCancel = useCallback(() => {
    setIsEdit(false)
  }, [setIsEdit])

  const handleDelete = useCallback(
    (id: string) => {
      handleRemoveField(id)
    },
    [handleRemoveField],
  )

  const handleFieldChange = useCallback(
    (key: string, data: any) => {
      const newField = JSON.parse(JSON.stringify(editField))
      if (editField?.columnId) {
        const newFormData = formData?.map((form: any) => {
          if (form.id === editField.columnId) {
            const mainKey: any = form.data?.left?.id === editField?.id ? 'left' : 'right'
            console.log('main Key', mainKey)

            if (mainKey) {
              form.data[mainKey] = { ...form.data[mainKey], [key]: data }
            }
          }
          return form
        })
        onChange(newFormData)
      } else {
        setEditField({ ...newField, [key]: data })
      }
    },
    [editField, setEditField],
  )

  const renderData = useMemo(() => (isEdit ? editField : field), [editField, isEdit, field])

  return {
    isEdit,
    editField,
    renderData,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    handleFieldChange,
  }
}

export default useFieldSet
