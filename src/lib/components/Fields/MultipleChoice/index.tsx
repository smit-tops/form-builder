import React from 'react'
import ItemLabel from '../../FormGenrator/ItemLabel'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'
import Options from '../../FormGenrator/Options'
import RequiredField from '../../FormGenrator/RequiredField'
import OptionsDisplayType from '../../FormGenrator/Options/OptionsDisplayType'

export default function MultiChoiceField({
  field,
  onChange,
  provided,
}: {
  field: FormField
  onChange: any
  provided: any
}) {
  const { isEdit, handleEdit, handleSave, handleCancel, handleDelete, renderData, handleFieldChange } = useFieldSet(
    field,
    onChange,
  )

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
        onChange={handleFieldChange}
        className="form-control"
        required={renderData.required}
      />

      <Options icon="fa-check-square" edit={isEdit} options={renderData.options} onChange={handleFieldChange} />

      <OptionsDisplayType
        edit={isEdit}
        value={renderData.displayType}
        onChange={handleFieldChange}
        id={renderData.id}
      />

      <RequiredField edit={isEdit} value={!!renderData.required} onChange={handleFieldChange} id={renderData.id} />
    </FieldCard>
  )
}
