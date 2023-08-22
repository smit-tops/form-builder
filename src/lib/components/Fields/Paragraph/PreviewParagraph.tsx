import React from 'react'

const PreviewParagraph = ({ data }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>
}

export default PreviewParagraph
