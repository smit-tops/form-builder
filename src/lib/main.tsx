import React, { useCallback, useEffect, useState } from 'react'
import { FormGenrator } from './container'
import { FormField } from './types/fields'
import { getForm, saveForm } from './service/formServices'
import { mockForm } from './types/constants'

export const Main = () => {
  const [data, setData] = useState<Array<FormField>>([])

  useEffect(() => {
    setData(getForm())
  }, [])

  const handleChnage = useCallback(
    (newItem: FormField) => {
      if (Array.isArray(newItem)) {
        setData(newItem)
        localStorage.setItem('formData', JSON.stringify(newItem))
      } else {
        const newData = data.map((item: FormField) => {
          if (item.id === newItem.id) {
            return newItem
          }
          return item
        })

        setData(newData)
        saveForm(newData)
      }
    },
    [data],
  )

  // saveForm(mockForm)

  return (
    <div>
      <FormGenrator data={data} onChange={handleChnage} />
    </div>
  )
}
