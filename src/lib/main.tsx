import React, { useCallback, useEffect, useState } from 'react'
import { FormGenrator } from './container'
import { FormField } from './types/fields'
import { getForm, saveForm } from './service/formServices'
import { mockForm } from './types/constants'
import FormPreview from './container/FormPreview'
import ResetPreview from './components/FormPreview/ResetPreview'

export const Main = () => {
  const [data, setData] = useState<Array<FormField>>([])
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    setData(getForm())
  }, [preview])

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

  const handleSubmit = (data: any) => {
    console.log('data==>', data)
  }

  // saveForm(mockForm)

  return (
    <div>
      <div className=" my-3 d-flex justify-content-center gap-2">
        <button className="btn btn-darkblue " onClick={() => setPreview(!preview)}>
          Preview
        </button>
        <ResetPreview setData={setData} />
        <button
          className="btn btn-darkblue "
          onClick={() => {
            localStorage.removeItem('formData')
            setData([])
          }}
        >
          Clear All
        </button>
      </div>
      {preview && <FormPreview formData={data} onsubmit={handleSubmit} />}
      {!preview && <FormGenrator data={data} onChange={handleChnage} />}
    </div>
  )
}
