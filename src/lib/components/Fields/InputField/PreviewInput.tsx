import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import useHandleChange from '../../../hook/useHandleChange'

type PreviewInputPropTypes = {
  field: FormField
  setData: any
  label: string
  placeholder: string
  type?: string
  required?: boolean
}

const PreviewInput = ({ field, setData, label, required, placeholder, type = 'text' }: PreviewInputPropTypes) => {
  const [handleTextChange] = useHandleChange(field, setData)
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
      <Form.Control
        value={field.value}
        onChange={handleTextChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      <Form.Control.Feedback type="invalid">Please provide a valid input.</Form.Control.Feedback>
    </Form.Group>
  )
}

export default PreviewInput
