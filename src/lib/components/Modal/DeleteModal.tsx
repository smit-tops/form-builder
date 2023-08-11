import React, { useCallback, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeleteModal = ({ onClick, message = '' }: any) => {
  const [show, setShow] = useState(false)
  const handleClose = useCallback(() => setShow(false), [])
  const handleShow = useCallback(() => setShow(true), [])
  return (
    <>
      <i
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          handleShow()
        }}
        className="cursor-pointer fa-solid fa-trash icon"
      ></i>
      <Modal
        className="deleteModel"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body onClick={handleClose}>
          <h4>{message ? <> {message}</> : <>Are you sure you want to delete?</>}</h4>
          <div className="mt-3">
            <Button className="rounded-pill" onClick={onClick} variant="success">
              YES
            </Button>
            <Button className="rounded-pill ml-2" variant="danger" onClick={handleClose}>
              NO
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteModal
