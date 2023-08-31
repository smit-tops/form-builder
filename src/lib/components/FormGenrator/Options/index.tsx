import React, { useEffect, useState } from 'react'
import { Option } from '../../../types/fields'
import SingleOption from './SingleOption'
import { v4 as uuid } from 'uuid'
import { on } from 'events'

const newOption = (length: number, options: Array<Option>): Option => {
  let label = `Option ${length + 1}`
  while (options.some((option) => option.label === label)) {
    length++
    label = `Option ${length + 1}`
  }
  return {
    value: uuid(),
    label: label,
    selected: false,
  }
}

export default function Options({
  icon,
  Options,
  onChange,
  edit,
}: {
  icon?: string
  Options?: Array<Option>
  onChange: (key: string, options: Array<Option>) => void
  edit?: boolean
}) {
  const [options, setOptions] = useState<Array<Option>>(Options || [])

  const onAddOption = () => {
    setOptions([...options, newOption(options.length, options)])
  }

  const handleRemoveOption = (value: string) => {
    setOptions(options.filter((option) => option.value !== value))
  }

  const handleChange = (value: string, index: number) => {
    const newOptions = JSON.parse(JSON.stringify(options))
    newOptions[index].label = value
    setOptions(newOptions)
  }

  useEffect(() => {
    onChange('options', options)
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
            edit={edit}
          />
        </div>
      ))}
      <i onClick={onAddOption} className="fa fa-plus mt-2 cursor-pointer" title="Add option"></i>
    </div>
  )
}
