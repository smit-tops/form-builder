import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import FieldPreviewLabel from '../../FormPreview/FieldPreviewLabel'
import useHandleChange from '../../../hook/useHandleChange'

const PreviewDropdown = ({ field, setData, label, required }: any) => {
  const { handleSingleSelect } = useHandleChange(field)
  return (
    <div className="mb-3">
      <FieldPreviewLabel required={!!required} label={field.label} />
      <Form.Select aria-label={label} id={label} required={required} onChange={handleSingleSelect}>
        <option>--select--</option>
        {field.options.map((item: any, index: number) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          )
        })}
      </Form.Select>
    </div>
  )
}

export default PreviewDropdown
