import React, { useContext, useMemo } from 'react'
import { ToolbarItemTypes, ToolbarItems } from '../../../types/constants'
import { getNewHeading, getNewLongText, getNewShortText, getNewSingleChoice } from '../../../service/initialField'
import { addField } from '../../../service/formServices'
import { FormGenratorContext } from '../../../context/FormContext'
import { FormField } from '../../../types/fields'

export default function ToolbarSection() {
  const { toolBar, setFormData } = useContext(FormGenratorContext)

  const handleClick = (key: string) => {
    switch (key) {
      case ToolbarItemTypes.Heading:
        const newItem = getNewHeading()
        addField(newItem)
        setFormData((prev: Array<FormField>) => [...prev, newItem])
        break
      case ToolbarItemTypes.LongText:
        const newItem2 = getNewLongText()
        addField(newItem2)
        setFormData((prev: Array<FormField>) => [...prev, newItem2])
        break
      case ToolbarItemTypes.SingleChoice:
        const newItem3 = getNewSingleChoice()
        console.log('newItem3', newItem3)
        addField(newItem3)
        setFormData((prev: Array<FormField>) => [...prev, newItem3])
        break
      case ToolbarItemTypes.ShortText:
        const newItem4 = getNewShortText()
        addField(newItem4)
        setFormData((prev: Array<FormField>) => [...prev, newItem4])
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
