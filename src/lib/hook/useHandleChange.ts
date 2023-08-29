import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { FormField } from '../types/fields'

const useHandleChange = (field: FormField, setData: any) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setData((prevData: Array<FormField>) =>
      prevData.map((item: FormField) => {
        if (item.type !== field.type) {
          return item
        } else {
          return {
            ...item,
            value: inputValue,
          }
        }
      }),
    )
  }

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

  return [handleTextChange, handleSingleSelect, handleMultiSelect]
}

export default useHandleChange
