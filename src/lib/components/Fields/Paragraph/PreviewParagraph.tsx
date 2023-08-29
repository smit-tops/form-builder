import React from 'react'

const PreviewParagraph = ({ field }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: field.value }}></div>
}

export default PreviewParagraph
