import React from 'react'
import { Form } from 'react-bootstrap'
import useHandleChange from '../../../hook/useHandleChange'
import FieldPreviewLabel from '../../FormPreview/FieldPreviewLabel'

const PreviewSingleChoice = ({ field, setData, required }: any) => {
  const { handleSingleSelect } = useHandleChange(field)

  return (
    <div className="mb-3">
      <FieldPreviewLabel required={!!required} label={field.label} />

      <div>
        {field.options.map((item: any, index: number) => {
          return (
            <Form.Check
              key={index}
              type="radio"
              value={item.value}
              id={item.label + field.id}
              label={item.label}
              inline={field.displayType === 'horizontal'}
              name={'PreviewSingleChoice-' + field.id}
              checked={item.selected}
              onChange={handleSingleSelect}
              required={required}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PreviewSingleChoice
