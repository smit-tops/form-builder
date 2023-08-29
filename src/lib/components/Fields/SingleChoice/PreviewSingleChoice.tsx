import React from 'react'
import { Form } from 'react-bootstrap'
import useHandleChange from '../../../hook/useHandleChange'
import { FormField } from '../../../types/fields'

const PreviewSingleChoice = ({ field, setData, required }: any) => {
  // const [handleSingleSelect] = useHandleChange(field, setData)
  const handleSingleSelect = (e: any) => {
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
      {field.options.map((item: any, index: number) => {
        return (
          <Form.Check
            key={index}
            type="radio"
            value={item.value}
            id={item.label}
            label={item.label}
            name="PreviewSingleChoice"
            checked={item.selected}
            onChange={handleSingleSelect}
            required={required}
          />
        )
      })}
    </div>
  )
}

export default PreviewSingleChoice
