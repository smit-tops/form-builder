import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor'

const tollbarItems = {
  heading: ['heading'],
  style: ['bold', 'italic', 'underline', 'link', 'removeFormat'],
  undo: ['undo', 'redo'],
  font: ['fontFamily', 'fontSize'],
  alignment: [
    'alignment',
    'bulletedList',
    'numberedList',
    'indent',
    'outdent',
    'blockQuote',
    'insertTable',
    'mediaEmbed',
  ],
}

export default function CkEditor({
  data,
  onReady,
  onChange,
  id,
  tollbarConfig = ['style'],
}: {
  data: any
  onReady: any
  onChange: any
  id: string
  tollbarConfig?: Array<'heading' | 'style' | 'undo' | 'font' | 'alignment'>
}) {
  const toolbar = tollbarConfig.map((item) => [...tollbarItems[item], '|']).flat()

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      id={'editor'}
      config={{
        fontSize: {
          options: [9, 10, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
        },
        toolbar: {
          items: toolbar,
          shouldNotGroupWhenFull: true,
        },
      }}
      onReady={onReady}
      onChange={onChange}
    />
  )
}
