import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FormField } from '../types/fields'
import { FormGenratorContext } from '../context/FormContext'

const useFieldSet = (field: FormField, onChange: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editField, setEditField] = useState<FormField>(field)
  const { handleFieldChange: fieldChange, handleRemoveField } = useContext(FormGenratorContext)

  useEffect(() => {
    if (isEdit) setEditField(field)
  }, [isEdit])

  const handleEdit = useCallback(() => {
    if (!isEdit) {
      setEditField(field)
      setIsEdit(true)
    }
  }, [isEdit, setIsEdit])

  const handleSave = useCallback(() => {
    fieldChange(editField)
    setIsEdit(false)
  }, [editField, setIsEdit, fieldChange])

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
      setEditField({ ...editField, [key]: data })
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
