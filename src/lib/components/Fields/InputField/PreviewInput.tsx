import React from 'react'
import { Form } from 'react-bootstrap'

type PreviewInputPropTypes = {
  label: string
  placeholder: string
  type?: string
}

const PreviewInput = ({ label, placeholder, type = 'text' }: PreviewInputPropTypes) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control type={type} placeholder={placeholder} />
      <Form.Control.Feedback type="invalid">Please provide a valid input.</Form.Control.Feedback>
    </Form.Group>
  )
}

export default PreviewInput
