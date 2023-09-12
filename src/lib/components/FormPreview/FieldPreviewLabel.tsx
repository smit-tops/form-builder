import React from 'react'
import { Form } from 'react-bootstrap'

export default function FieldPreviewLabel({ required, label }: { required: boolean; label: string }) {
  return (
    <>
      {label ? (
        <Form.Label>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: label }}></div>
            {required && <div className="ml-2 text-danger">*</div>}
          </div>
        </Form.Label>
      ) : null}
    </>
  )
}
