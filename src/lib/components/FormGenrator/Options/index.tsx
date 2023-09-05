import React, { useEffect, useState } from 'react'
import { Option } from '../../../types/fields'
import SingleOption from './SingleOption'
import { v4 as uuid } from 'uuid'

interface OptionsProps {
  icon?: string
  options?: Option[]
  onChange: (key: string, options: Option[]) => void
  edit?: boolean
}

const createNewOption = (length: number, options: Option[]): Option => {
  let label = `Option ${length + 1}`
  while (options.some((option) => option.label === label)) {
    length++
    label = `Option ${length + 1}`
  }
  return {
    value: uuid(),
    label,
    selected: false,
  }
}

export default function Options({ icon, options: initialOptions, onChange, edit }: OptionsProps) {
  const [options, setOptions] = useState<Option[]>(initialOptions || [])
  const [newAdded, setNewAdded] = useState(true)
  const addOption = () => {
    setNewAdded(true)
    setOptions([...options, createNewOption(options.length, options)])
  }

  const removeOption = (value: string) => {
    setOptions(options.filter((option) => option.value !== value))
  }

  const handleOptionChange = (value: string, index: number) => {
    const updatedOptions = JSON.parse(JSON.stringify(options))
    updatedOptions[index].label = value
    setOptions(updatedOptions)
  }

  useEffect(() => {
    onChange('options', options)
  }, [options])

  return (
    <div className="my-2">
      {options.map((option, index) => (
        <div key={option.value}>
          <SingleOption
            option={option}
            icon={icon}
            onDelete={removeOption}
            onChange={handleOptionChange}
            edit={edit}
            index={index}
            newAdded={index + 1 === options.length ? newAdded : false}
            setNewAdded={setNewAdded}
          />
        </div>
      ))}
      {edit && (
        <i
          onMouseDown={addOption}
          onClick={addOption}
          className="fa fa-plus mt-2 cursor-pointer"
          title="Add option"
        ></i>
      )}
    </div>
  )
}
