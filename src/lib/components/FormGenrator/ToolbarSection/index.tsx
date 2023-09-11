import React, { useContext, useMemo } from 'react'
import { FormGenratorContext } from '../../../context/FormContext'
import { addField } from '../../../service/formServices'
import { FormField } from '../../../types/fields'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { IToolbarItem } from '../../../types/toolbar'
import { itemToFunctionMap } from '../../../service/initialField'

export default function ToolbarSection({ items, renderSwitch }: { items: IToolbarItem[]; renderSwitch?: any }) {
  const { setFormData } = useContext(FormGenratorContext)

  const handleAddNewData = (newData: FormField) => {
    addField(newData)
    setFormData((prev: Array<FormField>) => [...prev, newData])
  }

  const handleClick = (key: string) => {
    const selectedFunction = itemToFunctionMap[key]
    if (selectedFunction) {
      handleAddNewData(selectedFunction())
    }
  }

  return (
    <Droppable
      droppableId="toolbarOption"
      isCombineEnabled={true}
      isDropDisabled={false}
      getContainerForClone={() => document.body}
      ignoreContainerClipping={true}
      renderClone={(provided, snapshot, rubric) => (
        <div className="w-100 position-ansolute" {...provided.draggableProps}>
          {renderSwitch(itemToFunctionMap[rubric.draggableId.split('/')[1]](), provided)}
        </div>
      )}
    >
      {(provided: any) => (
        <div className="text-center" {...provided.droppableProps} ref={provided.innerRef}>
          <div className="toolbox">
            {items.map((item, index) => (
              <Draggable
                key={'toolbox' + index}
                draggableId={'optionDragtoolbox' + index + '/' + item.key}
                disableInteractiveElementBlocking={false}
                index={index}
                shouldRespectForcePress={false}
              >
                {(provided) => {
                  return (
                    <div
                      className="iconBox cursor-pointer"
                      key={item.key}
                      onClick={() => handleClick(item.key)}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <div className="iconBoxInner" {...provided?.dragHandleProps}>
                        <i className={`icon fa-solid ${item.icon}`} />
                        <span className="d-block">{item.value}</span>
                      </div>
                    </div>
                  )
                }}
              </Draggable>
            ))}
          </div>
        </div>
      )}
    </Droppable>
  )
}
