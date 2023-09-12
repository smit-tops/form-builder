import React from 'react'
import { Form } from 'react-bootstrap'
import useHandleChange from '../../../hook/useHandleChange'
import FieldPreviewLabel from '../../FormPreview/FieldPreviewLabel'

const PreviewMultiChoice = ({ field, setData, required }: any) => {
  const { handleMultiSelect } = useHandleChange(field)

  return (
    <div className="mb-3">
      <FieldPreviewLabel required={required} label={field.label} />
      <div>
        {field.options.map((item: any, index: number) => {
          return (
            <Form.Check
              key={index}
              type="checkbox"
              id={item.value + field.id}
              inline={field.displayType === 'horizontal'}
              label={item.label}
              required={required}
              value={item.value}
              checked={item.selected}
              onClick={handleMultiSelect}
              name={'multi-' + field.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PreviewMultiChoice
