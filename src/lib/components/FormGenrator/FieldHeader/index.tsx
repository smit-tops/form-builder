import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { FormGenratorContext } from '../../../context/FormContext'
import DeleteModal from '../../Modal/DeleteModal'

const FieldHeader = ({
  onEdit,
  onDelete,
  title,
  provided,
  id,
}: {
  onEdit: () => void
  onDelete: () => void
  title: string
  provided: any
  id: string
}) => {
  const { handleCopyComponent } = useContext(FormGenratorContext)

  return (
    <Card.Header>
      <div className="card-title">{title}</div>
      <div className="card-toolbar">
        <i className="cursor-pointer fa-solid fa-pen-line icon" title="Edit" onClick={onEdit} />
        <i className="cursor-pointer fa-solid fa-copy icon" title="Copy" onClick={() => handleCopyComponent(id)} />
        <DeleteModal onClick={onDelete} />
        {/* <i className="cursor-pointer fa-solid fa-trash icon" onClick={onDelete} /> */}
        <div className="icon" {...provided?.dragHandleProps} title="Drag">
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical" />
          <i className="cursor-pointer fa-solid fa-ellipsis-vertical ms-1" />
        </div>
      </div>
    </Card.Header>
  )
}

export default FieldHeader
