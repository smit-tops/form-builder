import React from 'react'
import { FormField } from '../../../types/fields'

export default function PreviewLabelField({ field }: { field: FormField }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: field.label }}></div>
      <div dangerouslySetInnerHTML={{ __html: field.subLabel || '' }}></div>
    </div>
  )
}
