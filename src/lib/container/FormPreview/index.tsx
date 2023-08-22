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
const FormPreview = ({ data }: any) => {
  console.log('data', data)

  const renderSwitch = (item: FormField) => {
    const props = {
      // provided,
      field: item,
      // onChange: handleChangeFormData,
      placeholder: 'Enter',
      key: item.type,
      label: item.label,
      required: item.required,
    }

    switch (item.type) {
      // case ToolbarItemTypes.ShortText:
      //   return <InputField {...props} />
      case ToolbarItemTypes.LongText:
        return <PreviewMultilineInput {...props} />
      case ToolbarItemTypes.ShortText:
        return <PreviewInput {...props} />
      case ToolbarItemTypes.Heading:
        return <PreviewLabelField {...props} />
      // case ToolbarItemTypes.TwoColumns:
      //   return <TwoColumn {...props} />
      // case ToolbarItemTypes.Paragraph:
      //   return <ParagraphField {...props} />
      case ToolbarItemTypes.LineBreak:
        return <PreviewLineBreak />
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
