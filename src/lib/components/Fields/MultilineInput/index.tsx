import React from 'react'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'
import ItemLabel from '../../FormGenrator/ItemLabel'
import RequiredField from '../../FormGenrator/RequiredField'

export default function MultilineInput({
  field,
  onChange,
  provided,
}: {
  field: FormField
  onChange: any
  provided: any
}) {
  const {
    isEdit,
    renderData,
    handleLabelChange,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    onRequiredChange,
  } = useFieldSet(field, onChange)

  return (
    <FieldCard
      handleDelete={() => handleDelete(field.id)}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      handleSave={handleSave}
      isEdit={isEdit}
      value={renderData}
      provided={provided}
    >
      <ItemLabel
        edit={isEdit}
        value={renderData.label}
        onChange={handleLabelChange}
        className="form-control"
        required={renderData.required}
      />

      <textarea className="form-control my-2" disabled />

      <RequiredField edit={isEdit} value={renderData.required} onChange={onRequiredChange} />
    </FieldCard>
  )
}
