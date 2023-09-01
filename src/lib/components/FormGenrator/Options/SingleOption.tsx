import React, { useState, useEffect, useRef } from 'react'
import { Option } from '../../../types/fields'

interface SingleOptionProps {
  option: Option
  onDelete: (id: string) => void
  onChange: (value: string, index: number) => void
  icon?: string
  index: number
  edit?: boolean
}

export default function SingleOption({ option, onDelete, icon, index, onChange, edit }: SingleOptionProps) {
  const [isInputMode, setIsInputMode] = useState(false)
  const [value, setValue] = useState(option.label)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleBlur = () => {
    setIsInputMode(false)
    onChange(value, index)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (edit) setIsInputMode(true)
  }

  useEffect(() => {
    if (isInputMode && inputRef.current) {
      setTimeout(() => {
        inputRef?.current?.focus()
        inputRef?.current?.select()
      }, 100)
    }
  }, [isInputMode])

  return (
    <div className="d-flex justify-content-between align-items-center col-6">
      <div className="w-100 d-flex justify-content-between align-items-center">
        {icon ? <i className={`fa ${icon} `}></i> : `${index + 1}.`}
        {isInputMode ? (
          <input
            ref={inputRef}
            type="text"
            className="cursor-pointer mx-2 w-100 form-control form-control-1"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <div className="mx-2 w-100" onMouseDown={handleClick}>
            {value}
          </div>
        )}
      </div>

      {edit && (
        <i
          className="mx-5 fa fa-close cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(option.value)
          }}
        ></i>
      )}
    </div>
  )
}
