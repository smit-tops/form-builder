import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TwoColumn from './TwoColumn'
import InputField from '../Fields/InputField'
import LabelField from '../Fields/labelField'
import { FormField } from '../../types/fields'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function FieldEditSection({ data, onChange }: { data: FormField[]; onChange: any }) {
  const renderSwitch = (item: FormField, provided: any) => {
    switch (item.type) {
      // case 'input':
      //   return <InputField key={item.type} field={item} onChange={onChange} />
      case 'label':
        return <LabelField key={item.type} provided={provided} field={item} onChange={onChange} />
      case 'twoColumn':
        return <TwoColumn key={item.type} />
      default:
        return null
    }
  }
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return
    const items = Array.from(data)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    onChange(items)
  }
  return (
    <div className="w-100 p-3">
      <Row className="gy-3">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="optionDrag">
            {(provided: any) => (
              <Row {...provided.droppableProps} ref={provided.innerRef}>
                {data &&
                  data.map((item: FormField, index: number) => (
                    <Draggable key={'option' + item.id} draggableId={'optionDrag' + item.id} index={index}>
                      {(provided) => (
                        <div className="my-2" ref={provided.innerRef} {...provided.draggableProps}>
                          {renderSwitch(item, provided)}
                        </div>
                      )}
                    </Draggable>
                  ))}

                {provided.placeholder}
              </Row>
            )}
          </Droppable>
        </DragDropContext>
        <TwoColumn />
        <Col xs={12}>
          <div className="dropzone">Drop Zone</div>
        </Col>
      </Row>
    </div>
  )
}
