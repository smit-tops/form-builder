import React, { useEffect, useRef } from 'react'
import { Card, Col } from 'react-bootstrap'
import FieldHeader from './FieldHeader'
import FieldFooter from './FieldFooter'

const FieldCard = ({ handleDelete, handleEdit, handleCancel, handleSave, isEdit, children, value, provided }: any) => {
  const divRef = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current?.contains(event.target)) {
        handleCancel()
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <Col xs={12} onBlur={handleCancel} onDoubleClick={handleEdit}>
      <Card ref={divRef}>
        <FieldHeader onDelete={handleDelete} onEdit={handleEdit} title={value.fieldName} provided={provided} />
        <Card.Body>{children}</Card.Body>
        {isEdit && (
          <Card.Footer>
            <FieldFooter onCancel={handleCancel} onSave={handleSave} />
          </Card.Footer>
        )}
      </Card>
    </Col>
  )
}

export default FieldCard
