import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'

export default function LineBreakField({
  field,
  onChange,
  provided,
}: {
  field: FormField
  onChange: any
  provided: any
}) {
  const { isEdit, handleSave, handleCancel, handleDelete, renderData } = useFieldSet(field, onChange)

  return (
    <>
      <FieldCard
        handleDelete={() => handleDelete(field.id)}
        handleCancel={handleCancel}
        handleSave={handleSave}
        isEdit={isEdit}
        value={renderData}
        provided={provided}
      >
        <hr />
      </FieldCard>
    </>
  )
}
