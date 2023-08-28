import React from 'react'
import { Form } from 'react-bootstrap'

const PreviewSingleChoice = ({ field, required }: any) => {
  return (
    <div className="mb-3">
      {field.options.map((item: any, index: number) => {
        return (
          <Form.Check
            key={index}
            type="radio"
            id={item.name}
            label={item.name}
            name="PreviewSingleChoice"
            required={required}
          />
        )
      })}
    </div>
  )
}

export default PreviewSingleChoice
