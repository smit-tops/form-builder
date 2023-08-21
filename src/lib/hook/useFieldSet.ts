import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { FormField } from '../types/fields'
import { FormGenratorContext } from '../context/FormContext'

const useFieldSet = (field: FormField, onChange: any) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editField, setEditField] = useState<FormField>(field)
  const { handleFieldChange, handleRemoveField } = useContext(FormGenratorContext)

  useEffect(() => {
    if (isEdit) setEditField(field)
  }, [isEdit])

  const handleLabelChange = useCallback(
    (data: string, key = 'label') => {
      setEditField({ ...editField, [key]: data })
    },
    [editField],
  )

  const handleEdit = useCallback(() => {
    if (!isEdit) {
      setEditField(field)
      setIsEdit(true)
    }
  }, [isEdit, setIsEdit])

  const handleSave = useCallback(() => {
    handleFieldChange(editField)
    setIsEdit(false)
  }, [editField, setIsEdit, handleFieldChange])

  const handleCancel = useCallback(() => {
    setIsEdit(false)
  }, [setIsEdit])

  const handleDelete = useCallback(
    (id: string) => {
      handleRemoveField(id)
      console.log('handleDelete', id)
    },
    [handleRemoveField],
  )

  const onRequiredChange = useCallback(
    (checked: boolean) => {
      setEditField({ ...editField, required: checked })
    },
    [editField, setEditField],
  )

  const renderData = useMemo(() => (isEdit ? editField : field), [editField, isEdit, field])

  return {
    isEdit,
    editField,
    renderData,
    handleLabelChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    onRequiredChange,
  }
}

export default useFieldSet
