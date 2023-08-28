import React from 'react'
import { Form } from 'react-bootstrap'

const PreviewMultiChoice = ({ field, required }: any) => {
  return (
    <div className="mb-3">
      {field.options.map((item: any, index: number) => {
        return <Form.Check key={index} type="checkbox" id={item.name} label={item.name} required={required} />
      })}
    </div>
  )
}

export default PreviewMultiChoice
