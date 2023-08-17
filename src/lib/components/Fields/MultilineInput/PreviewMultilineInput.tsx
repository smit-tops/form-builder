import React from 'react'
import { Form } from 'react-bootstrap'

type PreviewInputPropTypes = {
  label: string
  placeholder: string
  type?: string
}

const PreviewMultilineInput = ({ label, placeholder, type = 'text' }: PreviewInputPropTypes) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control as="textarea" type={type} placeholder={placeholder} rows={3} />
    </Form.Group>
  )
}

export default PreviewMultilineInput
