import React from 'react'
import { Form } from 'react-bootstrap'

type PreviewInputPropTypes = {
  label: string
  placeholder: string
  type?: string
  required?: boolean | undefined
}

const PreviewInput = ({ label, required, placeholder, type = 'text' }: PreviewInputPropTypes) => {
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
      <Form.Control type={type} placeholder={placeholder} required={required} />
      <Form.Control.Feedback type="invalid">Please provide a valid input.</Form.Control.Feedback>
    </Form.Group>
  )
}

export default PreviewInput
