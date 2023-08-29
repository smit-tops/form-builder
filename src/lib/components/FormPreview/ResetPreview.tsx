import React from 'react'
import { mockFormFields } from '../../mockdata'
import { saveForm } from '../../service/formServices'

export default function ResetPreview({ setData }: any) {
  return (
    <div className="text-center">
      <button
        className="btn btn-darkblue"
        onClick={() => {
          saveForm(mockFormFields)
          setData(mockFormFields)
        }}
      >
        Reset Data
      </button>
    </div>
  )
}
