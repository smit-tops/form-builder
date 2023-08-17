import React from 'react'
import { Container, Form, Image, Col, Row, Button } from 'react-bootstrap'

import PreviewInput from '../../components/Fields/InputField/PreviewInput'
import PreviewMultilineInput from '../../components/Fields/MultilineInput/PreviewMultilineInput'
import FormHeader from '../../components/FormPreview/FormHeader'
import FormFooter from '../../components/FormPreview/FormFooter'
const FormPreview = () => {
  return (
    <div style={{ background: '#efefef' }} className="py-5">
      <Container>
        <div className="bg-white p-5">
          <FormHeader />
          <Form>
            <PreviewInput label="Email" placeholder="Enter email" />
            <PreviewMultilineInput label="Example textarea" placeholder="Enter example textarea" />

            <div className="mb-3">
              <Form.Check // prettier-ignore
                type="radio"
                label="default radio"
              />

              <Form.Check // prettier-ignore
                type="radio"
                label="default radio"
              />
            </div>

            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />

            <Button type="submit">Submit form</Button>
          </Form>
          <FormFooter />
        </div>
      </Container>
    </div>
  )
}

export default FormPreview
