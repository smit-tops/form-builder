import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function PreviewTwoColumns({ field, setData, required, renderSwitch }: any) {
  console.log('field', field.data.left, field.data.right)

  return (
    <div>
      <Row>
        <Col md={6}>{renderSwitch(field.data.left)}</Col>
        <Col md={6}>{renderSwitch(field.data.right)}</Col>
      </Row>
    </div>
  )
}
