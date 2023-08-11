import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { FormGenratorContext } from '../../../context/FormContext'
import DeleteModal from '../../Modal/DeleteModal'

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
        <DeleteModal onClick={onDelete} />
        {/* <i className="cursor-pointer fa-solid fa-trash icon" onClick={onDelete} /> */}
        <div className="icon" {...provided?.dragHandleProps}>
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical" />
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical ms-1" />
        </div>
      </div>
    </Card.Header>
  )
}

export default FieldHeader
