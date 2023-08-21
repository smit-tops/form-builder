import React, { useState } from 'react'
import { Option } from '../../../types/fields'

const newOption = (length: number): Option => {
  return {
    value: 'Option_' + length,
    label: 'OPtion ' + length,
    selected: false,
  }
}

export default function Options({ icon }: any) {
  const [options, setOptions] = useState<Array<Option>>([])

  const onAddOption = () => {
    setOptions([...options, newOption(options.length)])
  }

  const handleRemoveOption = (value: string) => {
    setOptions(options.filter((option) => option.value !== value))
  }
  return (
    <div>
      {options.map((option, index) => (
        <div key={option.value}>
          {icon ? <i className={`fa ${icon}`}></i> : index + 1}
          <label className="mx-2" htmlFor="">
            {option.value}
          </label>

          <i className="mx-5 fa fa-close" onClick={() => handleRemoveOption(option.value)}></i>
        </div>
      ))}
      <i onClick={onAddOption} className="fa fa-plus"></i>
    </div>
  )
}
