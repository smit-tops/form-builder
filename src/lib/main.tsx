import React, { useCallback, useEffect, useState } from 'react'
import { FormGenrator } from './container'
import { FormField } from './types/fields'
import { getForm } from './service/formServices'
import FormPreview from './container/FormPreview'
import ResetPreview from './components/FormPreview/ResetPreview'

export const Main = () => {
  const [data, setData] = useState<Array<FormField>>([])
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    setData(getForm())
  }, [preview])

  const handleChnage = useCallback(
    (newItem: Array<FormField>) => {
      setData(newItem)
      localStorage.setItem('formData', JSON.stringify(newItem))
    },
    [data],
  )

  const handleSubmit = (data: any) => {
    console.log('data==>', data)
  }

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
      {preview && <FormPreview formData={data} onSubmit={handleSubmit} />}
      {!preview && <FormGenrator data={data} onChange={handleChnage} />}
    </div>
  )
}
