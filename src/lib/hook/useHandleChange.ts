import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react'
import { FormField } from '../types/fields'
import { FormPreviewContext } from '../context/FormContext'

const useHandleChange = (field: FormField) => {
  const { formData, setFormData } = useContext(FormPreviewContext)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (!field.columnId) {
      console.log('columnId: sdfsdf', field.columnId, 'inputValue: ', inputValue)

      setFormData((prevData: Array<FormField>) =>
        prevData.map((item: FormField) => (item.id !== field.id ? item : { ...item, value: inputValue })),
      )
    } else {
      console.log('columnId: ', field.columnId, 'inputValue: ', inputValue)
      const newData = formData?.map((item: FormField) => {
        if (item.id === field.columnId) {
          console.log('item.data?.right?.id === field.id', item)

          if (item.data?.left?.id === field.id) {
            return { ...item, data: { ...item.data, left: { ...item.data?.left, value: inputValue } } }
          } else if (item.data?.right?.id === field.id) {
            console.log(':sdfsdf')

            return { ...item, data: { ...item.data, right: { ...item.data?.right, value: inputValue } } }
          } else {
            return item
          }
        }
        return item
      })
      setFormData(newData)
      console.log('newData', newData)

      setFormData(newData)
    }
  }

  const handleSingleSelect = (e: any) => {
    if (!field.columnId) {
      setFormData((prevData: FormField[]) =>
        prevData.map((item: FormField) => {
          if (item.id !== field.id) {
            return item
          } else {
            return {
              ...item,
              options: item?.options?.map((option) =>
                option.value !== e.target.value ? { ...option, selected: false } : { ...option, selected: true },
              ),
            }
          }
        }),
      )
    } else {
      const newData = formData?.map((item: FormField) => {
        if (item.id === field.columnId) {
          if (item.data?.left?.id === field.id) {
            return {
              ...item,
              data: {
                ...item.data,
                left: {
                  ...item.data?.left,
                  options: item?.data?.left?.options?.map((option: any) =>
                    option.value !== e.target.value ? { ...option, selected: false } : { ...option, selected: true },
                  ),
                },
              },
            }
          } else if (item.data?.right?.id === field.id) {
            return {
              ...item,
              data: {
                ...item.data,
                right: {
                  ...item.data?.right,
                  options: item?.data?.right?.options?.map((option: any) =>
                    option.value !== e.target.value ? { ...option, selected: false } : { ...option, selected: true },
                  ),
                },
              },
            }
          } else {
            return item
          }
        }
        return item
      })
      setFormData(newData)
    }
  }

  const handleMultiSelect = (e: any) => {
    if (!field.columnId) {
      setFormData((prevData: Array<FormField>) =>
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
    } else {
      const newData = formData?.map((item: any) => {
        if (item.id === field.columnId) {
          if (item.data?.left?.id === field.id) {
            return {
              ...item,
              data: {
                ...item.data,
                left: {
                  ...item.data?.left,
                  options: item?.data?.left?.options?.map((option: any) =>
                    option.value !== e.target.value ? option : { ...option, selected: !option.selected },
                  ),
                },
              },
            }
          } else if (item.data?.right?.id === field.id) {
            return {
              ...item,
              data: {
                ...item.data,
                right: {
                  ...item.data?.right,
                  options: item?.data?.right?.options?.map((option: any) =>
                    option.value !== e.target.value ? option : { ...option, selected: !option.selected },
                  ),
                },
              },
            }
          } else {
            return item
          }
        }
        return item
      })
      setFormData(newData)
    }
  }

  return { handleTextChange, handleSingleSelect, handleMultiSelect }
}

export default useHandleChange
