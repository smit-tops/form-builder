import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import TwoColumn from './TwoColumn'
import InputField from '../Fields/InputField'
import LabelField from '../Fields/labelField'
import { FormField } from '../../types/fields'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { ToolbarItemTypes } from '../../types/constants'
import { FormGenratorContext } from '../../context/FormContext'
import MultilineInput from '../Fields/MultilineInput'
import SingleChoice from '../Fields/SingleChoice'
import ParagraphField from '../Fields/Paragraph'
import LineBreakField from '../Fields/LineBreak'
import MultiChoiceField from '../Fields/MultipleChoice'
import DateField from '../Fields/Date'
import DropdownField from '../Fields/Dropdown'
import ImageField from '../Fields/Image'
import FileField from '../Fields/File'
import TwoColumnsField from '../Fields/TwoColumns'

export default function FieldEditSection() {
  const { formData, handleChangeFormData } = useContext(FormGenratorContext)

  const renderSwitch = (item: FormField, provided: any) => {
    const props = {
      provided,
      field: item,
      onChange: handleChangeFormData,
      key: item.type,
      renderSwitch,
    }

    switch (item.type) {
      case ToolbarItemTypes.ShortText:
        return <InputField {...props} />
      case ToolbarItemTypes.LongText:
        return <MultilineInput {...props} />
      case ToolbarItemTypes.Heading:
        return <LabelField {...props} />
      case ToolbarItemTypes.SingleChoice:
        return <SingleChoice {...props} />
      case ToolbarItemTypes.Paragraph:
        return <ParagraphField {...props} />
      case ToolbarItemTypes.LineBreak:
        return <LineBreakField {...props} />
      case ToolbarItemTypes.MultipleChoice:
        return <MultiChoiceField {...props} />
      case ToolbarItemTypes.Date:
        return <DateField {...props} />
      case ToolbarItemTypes.Dropdown:
        return <DropdownField {...props} />
      case ToolbarItemTypes.Image:
        return <ImageField {...props} />
      case ToolbarItemTypes.File:
        return <FileField {...props} />
      case ToolbarItemTypes.TwoColumns:
        return <TwoColumnsField {...props} />

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
        {/* <TwoColumn />
        <Col xs={12}>
          <div className="dropzone">Drop Zone</div>
        </Col> */}
      </Row>
    </div>
  )
}
