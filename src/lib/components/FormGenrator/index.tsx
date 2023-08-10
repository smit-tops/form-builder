import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import TwoColumn from './TwoColumn'
import InputField from '../Fields/InputField'
import LabelField from '../Fields/labelField'
import { FormField } from '../../types/fields'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { ToolbarItemTypes } from '../../types/constants'
import { FormGenratorContext } from '../../context/FormContext'

export default function FieldEditSection() {
  const { formData, handleChangeFormData } = useContext(FormGenratorContext)

  const renderSwitch = (item: FormField, provided: any) => {
    const props = {
      provided,
      field: item,
      onChange: handleChangeFormData,
      key: item.type,
    }

    switch (item.type) {
      case ToolbarItemTypes.ShortText:
        return <InputField {...props} />
      case ToolbarItemTypes.Heading:
        return <LabelField {...props} />
      case ToolbarItemTypes.TwoColumns:
        return <TwoColumn {...props} />
      default:
        return null
    }
  }

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return
    const items = [...(formData ?? [])]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    handleChangeFormData(items)
  }

  return (
    <div className="w-100 p-3">
      <Row className="gy-3">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="optionDrag" isCombineEnabled={true}>
            {(provided: any) => (
              <Row {...provided.droppableProps} ref={provided.innerRef}>
                {formData &&
                  formData.map((item: FormField, index: number) => (
                    <Draggable key={'option' + item.id} draggableId={'optionDrag' + item.id} index={index}>
                      {(provided) => {
                        return (
                          <div className="my-2" ref={provided.innerRef} {...provided.draggableProps}>
                            {renderSwitch(item, provided)}
                          </div>
                        )
                      }}
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
