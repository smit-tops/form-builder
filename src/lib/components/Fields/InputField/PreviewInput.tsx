import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { FormField } from '../../../types/fields'

type PreviewInputPropTypes = {
  field: FormField
  label: string
  placeholder: string
  type?: string
  required?: boolean | undefined
}

const PreviewInput = ({ field, label, required, placeholder, type = 'text' }: PreviewInputPropTypes) => {
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    console.log('inputValue', inputValue)
  }
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      {label ? (
        <Form.Label>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: label }}></div>
            {required && <div className="ml-2 text-danger">*</div>}
          </div>
        </Form.Label>
      ) : null}
      <Form.Control onChange={handlechange} type={type} placeholder={placeholder} required={required} />
      <Form.Control.Feedback type="invalid">Please provide a valid input.</Form.Control.Feedback>
    </Form.Group>
  )
}

export default PreviewInput
