import React from 'react'
import { Container, Form, Image, Col, Row, Button } from 'react-bootstrap'

import PreviewInput from '../../components/Fields/InputField/PreviewInput'
import PreviewMultilineInput from '../../components/Fields/MultilineInput/PreviewMultilineInput'
import FormHeader from '../../components/FormPreview/FormHeader'
import FormFooter from '../../components/FormPreview/FormFooter'
import { FormField } from '../../types/fields'
import { ToolbarItemTypes } from '../../types/constants'
import PreviewLabelField from '../../components/Fields/labelField/PreviewLabelField'
import PreviewLineBreak from '../../components/Fields/LineBreak/PreviewLineBreak'
import PreviewParagraph from '../../components/Fields/Paragraph/PreviewParagraph'
import PreviewSingleChoice from '../../components/Fields/SingleChoice/PreviewSingleChoice'
import PreviewMultiChoice from '../../components/Fields/MultipleChoice/PreviewMultiChoice'
import PreviewDropdown from '../../components/Fields/Dropdown/PreviewDropdown'
const FormPreview = ({ data }: any) => {
  const renderSwitch = (item: FormField) => {
    const props = {
      field: item,
      // onChange: handleChangeFormData,
      placeholder: 'Enter',
      key: item.type,
      label: item.label,
      required: item.required,
    }
    switch (item.type) {
      case ToolbarItemTypes.ShortText:
        return <PreviewInput {...props} />
      case ToolbarItemTypes.LongText:
        return <PreviewMultilineInput {...props} />
      case ToolbarItemTypes.Heading:
        return <PreviewLabelField {...props} />
      case ToolbarItemTypes.SingleChoice:
        return <PreviewSingleChoice {...props} />
      case ToolbarItemTypes.Paragraph:
        return <PreviewParagraph {...props} />
      case ToolbarItemTypes.LineBreak:
        return <PreviewLineBreak />
      case ToolbarItemTypes.MultipleChoice:
        return <PreviewMultiChoice {...props} />
      // case ToolbarItemTypes.Date:
      //   return <DateField {...props} />
      case ToolbarItemTypes.Dropdown:
        return <PreviewDropdown {...props} />
      // case ToolbarItemTypes.Image:
      //   return <ImageField {...props} />
      // case ToolbarItemTypes.File:
      //   return <FileField {...props} />
      // case ToolbarItemTypes.TwoColumns:
      //   return <TwoColumnsField {...props} />
      default:
        return null
    }
  }

  return (
    <div style={{ background: '#efefef' }} className="py-5">
      <Container>
        <div className="bg-white p-5">
          <FormHeader />
          <Form>
            {/* <PreviewSingleChoice field={{ options: [{ name: 'Aqeeb' }, { name: 'Kashif' }] }} required />
            <PreviewMultiChoice field={{ options: [{ name: 'Aqeeb' }, { name: 'Kashif' }] }} required />
            <PreviewDropdown 
              field={{ options: [{ name: 'Aqeeb' }, { name: 'Kashif' }] }}
              label="Open this dropdown!"
              required
            />
            */}
            {data &&
              data.map((item: FormField, index: number) => (
                <div className="my-2" key={index}>
                  {renderSwitch(item)}
                </div>
              ))}
            <Button type="submit">Submit form</Button>
          </Form>
          <FormFooter />
        </div>
      </Container>
    </div>
  )
}

export default FormPreview
