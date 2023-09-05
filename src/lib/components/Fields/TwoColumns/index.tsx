import React, { useMemo } from 'react'
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
  const { handleEdit, handleSave, handleCancel, handleDelete, renderData } = useFieldSet(field, onChange)

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return
    if (field.data) {
      // field.data. left and right swap
      const left = field.data.left
      const right = field.data.right
      field.data.left = right
      field.data.right = left
      handleSave(field)
    }
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
                  {field?.data?.left && (
                    <Draggable
                      key={'option' + field?.data?.left.id}
                      draggableId={'optionDrag' + field?.data?.left.id}
                      index={0}
                    >
                      {(provided) => {
                        return (
                          <Col xs={6} className="my-2" ref={provided.innerRef} {...provided.draggableProps}>
                            {field?.data?.left.id ? (
                              <>{renderSwitch({ ...field?.data?.left, columnId: field.id }, provided)}</>
                            ) : (
                              <div className="dropzone">Drop Zone</div>
                            )}
                          </Col>
                        )
                      }}
                    </Draggable>
                  )}
                  {field?.data?.left && (
                    <Draggable
                      key={'option' + field?.data?.right.id}
                      draggableId={'optionDrag' + field?.data?.right.id}
                      index={1}
                    >
                      {(provided) => {
                        return (
                          <Col xs={6} className="my-2" ref={provided.innerRef} {...provided.draggableProps}>
                            {field?.data?.right.id ? (
                              <>{renderSwitch({ ...field?.data?.right, columnId: field.id }, provided)}</>
                            ) : (
                              <div className="dropzone">Drop Zone</div>
                            )}
                          </Col>
                        )
                      }}
                    </Draggable>
                  )}
                  {provided.placeholder}
                </Row>
              )}
            </Droppable>
          </DragDropContext>
        </Card.Body>
      </FieldCard>
    </>
  )
}
