import React from 'react'
import { Form } from 'react-bootstrap'
import { FormField } from '../../../types/fields'
import useHandleChange from '../../../hook/useHandleChange'

const PreviewMultiChoice = ({ field, setData, required }: any) => {
  // const [handleMultiSelect] = useHandleChange(field, setData)
  const handleMultiSelect = (e: any) => {
    setData((prevData: Array<FormField>) =>
      prevData.map((item: any) => {
        if (item.type !== field.type) {
          return item
        } else {
          return {
            ...item,
            options: item?.options.map((option: any) =>
              option.value !== e.target.value ? option : { ...option, selected: !option.selected },
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
            type="checkbox"
            id={item.value}
            label={item.label}
            required={required}
            value={item.value}
            checked={item.selected}
            onClick={handleMultiSelect}
          />
        )
      })}
    </div>
  )
}

export default PreviewMultiChoice
