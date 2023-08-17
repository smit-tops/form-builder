import React, { useContext, useMemo } from 'react'
import { ToolbarItemTypes, ToolbarItems } from '../../../types/constants'
import * as n from '../../../service/initialField'
import { addField } from '../../../service/formServices'
import { FormGenratorContext } from '../../../context/FormContext'
import { FormField } from '../../../types/fields'

export default function ToolbarSection() {
  const { toolBar, setFormData } = useContext(FormGenratorContext)

  const handleAddNewData = (newData: FormField) => {
    addField(newData)
    setFormData((prev: Array<FormField>) => [...prev, newData])
  }

  const handleClick = (key: string) => {
    switch (key) {
      case ToolbarItemTypes.Heading:
        handleAddNewData(n.getNewHeading())
        break
      case ToolbarItemTypes.LongText:
        handleAddNewData(n.getNewLongText())
        break
      case ToolbarItemTypes.SingleChoice:
        handleAddNewData(n.getNewSingleChoice())
        break
      case ToolbarItemTypes.ShortText:
        handleAddNewData(n.getNewShortText())
        break
      case ToolbarItemTypes.Paragraph:
        handleAddNewData(n.getNewParagraph())
        break
      case ToolbarItemTypes.LineBreak:
        handleAddNewData(n.getNewLineBreak())
        break
      default:
    }
  }

  const items = useMemo(() => {
    if (toolBar) {
      return toolBar
    }
    return ToolbarItems || []
  }, [toolBar])

  return (
    <div className=" text-center">
      <div className="toolbox">
        {items.map((item) => (
          <div className="iconBox cursor-pointer" key={item.key} onClick={() => handleClick(item.key)}>
            <div className="iconBoxInner">
              <i className={`icon fa-solid ${item.icon}`} />
              <span className="d-block">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
