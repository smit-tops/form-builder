import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function PreviewTwoColumns({ field, setData, required, renderSwitch }: any) {
  return (
    <div>
      <Row>
        <Col md={6}>{renderSwitch({ ...field.data.left, columnId: field.id })}</Col>
        <Col md={6}>{renderSwitch({ ...field.data.right, columnId: field.id })}</Col>
      </Row>
    </div>
  )
}
