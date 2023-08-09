import React from 'react'
import { toolbarItems } from '../../../mockdata.ts'

export default function ToolbarSection() {
  const handleClick = (key: string) => {
    switch (key) {
      case 'label':
        const formData = JSON.parse(localStorage.getItem('formData') ?? '[]')
        const newItem = {
          id: formData.length + 1,
          label: 'label',
          type: 'label',
          value: 'Header Label',
          fieldName: 'Label',
        }
        formData.push(newItem)
        localStorage.setItem('formData', JSON.stringify(formData))
        break
      case 'input':
        console.log('input')
        break
      default:
        console.log('default')
    }
  }
  return (
    <div className="toolbox text-center">
      {(toolbarItems || []).map((item) => (
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
