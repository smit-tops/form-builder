import React from 'react'
import { Form } from 'react-bootstrap'
import useHandleChange from '../../../hook/useHandleChange'
import { FormField } from '../../../types/fields'

const PreviewDropdown = ({ field, setData, label, required }: any) => {
  // const [handleSingleSelect] = useHandleChange(field, setData)
  const handleSingleSelect = (e: any) => {
    console.log('==>', e.target.value)
    setData((prevData: Array<FormField>) =>
      prevData.map((item: any) => {
        if (item.type !== field.type) {
          return item
        } else {
          return {
            ...item,
            options: item?.options.map((option: any) =>
              option.value !== e.target.value ? { ...option, selected: false } : { ...option, selected: true },
            ),
          }
        }
      }),
    )
  }
  return (
    <div className="mb-3">
      {field.label ? (
        <Form.Label>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: field.label }}></div>
            {required && <div className="ml-2 text-danger">*</div>}
          </div>
        </Form.Label>
      ) : null}
      <Form.Select aria-label={label} id={label} required={required} onChange={handleSingleSelect}>
        <option>--select--</option>
        {field.options.map((item: any, index: number) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          )
        })}
      </Form.Select>
    </div>
  )
}

export default PreviewDropdown
