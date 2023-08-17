import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'
import CkEditor from '../CkEditor'

const ItemLabel = ({
  value = 'Label Text',
  onChange,
  edit = false,
  className,
  required = false,
  label = 'Question',
  keyField,
  input = false,
}: {
  value?: string
  onChange?: any
  onSubmit?: any
  edit?: boolean
  className?: string
  required?: boolean
  label?: string
  keyField?: string
  input?: boolean
}) => {
  const [data, setData] = useState<string>()
  const handleChanges = (event: any, editor: any) => {
    const dataValue = editor.getData()
    setData(dataValue)
    if (onChange) onChange(dataValue, keyField)
  }

  if (!edit) {
    return (
      <div className="d-flex">
        <div dangerouslySetInnerHTML={{ __html: value }} className="" />
        {required && <div className="ml-2 text-danger">*</div>}
      </div>
    )
  }

  return (
    <div>
      <label htmlFor="editor">{label || 'Question'}</label>

      {input && (
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e.target.value, keyField)
          }}
        />
      )}

      {!input && (
        <CkEditor
          data={data}
          id={'editor'}
          onReady={(editor: any) => {
            editor.setData(value || '')
            setData(value || '')
          }}
          tollbarConfig={['heading', 'style', 'alignment', 'undo', 'font']}
          onChange={handleChanges}
        />
      )}
    </div>
  )
}

export default ItemLabel
