import React from 'react'
import { Form } from 'react-bootstrap'

type PreviewInputPropTypes = {
  label: string
  placeholder: string
  type?: string
  required?: boolean | undefined
}

const PreviewMultilineInput = ({ label, placeholder, required, type = 'text' }: PreviewInputPropTypes) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      {label ? (
        <Form.Label>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: label }}></div>
            {required && <div className="ml-2 text-danger">*</div>}
          </div>
        </Form.Label>
      ) : null}
      <Form.Control as="textarea" type={type} placeholder={placeholder} required={required} rows={3} />
    </Form.Group>
  )
}

export default PreviewMultilineInput
