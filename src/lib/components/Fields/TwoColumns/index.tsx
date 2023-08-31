import React from 'react'
import ItemLabel from '../../FormGenrator/ItemLabel'
import { FormField } from '../../../types/fields'
import useFieldSet from '../../../hook/useFieldSet'
import FieldCard from '../../FormGenrator/FieldCard'
import { Card, Col, Row } from 'react-bootstrap'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function TwoColumnsField({
  field,
  onChange,
  provided,
  renderSwitch,
}: {
  field: FormField
  onChange: any
  provided: any
  renderSwitch: any
}) {
  const { isEdit, handleFieldChange, handleEdit, handleSave, handleCancel, handleDelete, renderData } = useFieldSet(
    field,
    onChange,
  )

  const handleOnDragEnd = (result: any) => {
    console.log(result)
  }

  return (
    <>
      <FieldCard
        handleDelete={() => handleDelete(field.id)}
        handleEdit={handleEdit}
        handleCancel={handleCancel}
        handleSave={handleSave}
        // isEdit={isEdit}
        value={renderData}
        provided={provided}
      >
        <Card.Body>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="optionDrag" direction="horizontal">
              {(provided: any) => (
                <Row {...provided.droppableProps} ref={provided.innerRef}>
                  {field?.data &&
                    field?.data.map((item: FormField, index: number) => (
                      <Draggable key={'option' + item.id} draggableId={'optionDrag' + item.id} index={index}>
                        {(provided) => {
                          return (
                            <Col xs={6} className="my-2" ref={provided.innerRef} {...provided.draggableProps}>
                              {renderSwitch(item, provided)}
                            </Col>
                          )
                        }}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                </Row>
              )}
            </Droppable>
          </DragDropContext>
          {/* <Row className="g-3">
            <Col xs={6}>
              {field?.data && (
                <Card>
                  {field && field?.data[0] ? (
                    renderSwitch(field?.data[0], provided)
                  ) : (
                    <div className="card-toolbar">
                      <i className="fa-solid fa-pen-line icon" />
                      <i className="fa-solid fa-trash icon" />
                      <div className="icon">
                        <i className="fa-solid fa-ellipsis-vertical" />
                        <i className="fa-solid fa-ellipsis-vertical ms-1" />
                      </div>
                    </div>
                  )}
                  <Card.Body />
                </Card>
              )}
            </Col>
            <Col xs={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Header Text</div>
                  <div className="card-toolbar">
                    <i className="fa-solid fa-pen-line icon" />
                    <i className="fa-solid fa-trash icon" />
                    <div className="icon">
                      <i className="fa-solid fa-ellipsis-vertical" />
                      <i className="fa-solid fa-ellipsis-vertical ms-1" />
                    </div>
                  </div>
                </Card.Header>
                <Card.Body />
              </Card>
            </Col>
          </Row> */}
        </Card.Body>
      </FieldCard>
    </>
  )
}
