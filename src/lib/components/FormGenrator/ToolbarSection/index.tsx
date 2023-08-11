import React, { useContext, useMemo } from 'react'
import { ToolbarItemTypes, ToolbarItems } from '../../../types/constants'
import { getNewHeading, getNewLongText, getNewSingleChoice } from '../../../service/initialField'
import { addField } from '../../../service/formServices'
import { IToolbarItem } from '../../../types/toolbar'
import { FormGenratorContext } from '../../../context/FormContext'

export default function ToolbarSection() {
  const { toolBar } = useContext(FormGenratorContext)

  const handleClick = (key: string) => {
    switch (key) {
      case ToolbarItemTypes.Heading:
        const newItem = getNewHeading()
        addField(newItem)
        break
      case ToolbarItemTypes.LongText:
        addField(getNewLongText())
        break
      case ToolbarItemTypes.SingleChoice:
        addField(getNewSingleChoice())
        break
      case ToolbarItemTypes.ShortText:
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
    <div className="toolbox text-center">
      {items.map((item) => (
        <div className="iconBox" key={item.key} onClick={() => handleClick(item.key)}>
          <div className="iconBoxInner">
            <i className={`icon fa-solid ${item.icon}`} />
            <span className="d-block">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
