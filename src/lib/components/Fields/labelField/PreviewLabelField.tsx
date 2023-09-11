import React from 'react'
import { FormField } from '../../../types/fields'

export default function PreviewLabelField({ field }: { field: FormField }) {
  return (
    <div>
      {field.label && <div dangerouslySetInnerHTML={{ __html: field.label }}></div>}
      {field.subLabel && <div dangerouslySetInnerHTML={{ __html: field.subLabel }}></div>}
    </div>
  )
}
