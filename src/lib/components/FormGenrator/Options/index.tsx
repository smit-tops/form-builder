import React, { useEffect, useState } from 'react'
import { Option } from '../../../types/fields'
import SingleOption from './SingleOption'
import { v4 as uuid } from 'uuid'
import { on } from 'events'

const newOption = (length: number): Option => {
  return {
    value: uuid(),
    label: 'Option ' + length,
    selected: false,
  }
}

export default function Options({
  icon,
  Options,
  onChange,
}: {
  icon?: string
  Options: Array<Option>
  onChange: (options: Array<Option>) => void
}) {
  const [options, setOptions] = useState<Array<Option>>(Options || [])

  const onAddOption = () => {
    setOptions([...options, newOption(options.length)])
  }

  const handleRemoveOption = (value: string) => {
    setOptions(options.filter((option) => option.value !== value))
  }

  const handleChange = (value: string, index: number) => {
    const newOptions = [...options]
    newOptions[index].label = value
    setOptions(newOptions)
  }

  useEffect(() => {
    onChange(options)
  }, [options])

  return (
    <div className="my-2">
      {options.map((option, index) => (
        <div key={option.value}>
          <SingleOption
            index={index}
            option={option}
            icon={icon}
            onDelete={handleRemoveOption}
            onChange={handleChange}
          />
        </div>
      ))}
      <i onClick={onAddOption} className="fa fa-plus mt-2 cursor-pointer" title="Add option"></i>
    </div>
  )
}
