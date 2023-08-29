import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import useHandleChange from '../../../hook/useHandleChange'

type PreviewInputPropTypes = {
  field: FormField
  label: string
  setData: any
  placeholder: string
  type?: string
  required?: boolean | undefined
}

const PreviewMultilineInput = ({
  field,
  setData,
  label,
  placeholder,
  required,
  type = 'text',
}: PreviewInputPropTypes) => {
  const [handleTextChange] = useHandleChange(setData, field)
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
      <Form.Control
        value={field.value}
        onChange={handleTextChange}
        as="textarea"
        type={type}
        placeholder={placeholder}
        required={required}
        rows={3}
      />
    </Form.Group>
  )
}

export default PreviewMultilineInput
