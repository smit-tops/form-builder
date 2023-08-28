import React from 'react'
import { Form } from 'react-bootstrap'

const PreviewDropdown = ({ field, label, required }: any) => {
  return (
    <div className="mb-3">
      <label htmlFor={label}>{label}</label>
      <Form.Select aria-label={label} id={label} required={required}>
        <option>{label}</option>
        {field.options.map((item: any, index: number) => {
          return (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          )
        })}
      </Form.Select>
    </div>
  )
}

export default PreviewDropdown
