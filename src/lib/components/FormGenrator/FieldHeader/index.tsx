import React from 'react'
import { Card } from 'react-bootstrap'

const FieldHeader = ({
  onEdit,
  onDelete,
  title,
  provided,
}: {
  onEdit: () => void
  onDelete: () => void
  title: string
  provided: any
}) => {
  return (
    <Card.Header>
      <div className="card-title">{title}</div>
      <div className="card-toolbar">
        <i className="cursor-pointer fa-solid fa-pen-line icon" onClick={onEdit} />
        <i className="cursor-pointer fa-solid fa-trash icon" onClick={onDelete} />
        <div className="icon">
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical" {...provided?.dragHandleProps} />
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical ms-1" {...provided?.dragHandleProps} />
        </div>
      </div>
    </Card.Header>
  )
}

export default FieldHeader
