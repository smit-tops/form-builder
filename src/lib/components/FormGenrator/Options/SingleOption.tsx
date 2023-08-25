import { useEffect, useRef, useState } from 'react'
import { Option } from '../../../types/fields'

const SingleOption = ({
  option,
  onDelete,
  icon,
  index,
  onChange,
}: {
  option: Option
  onDelete: (id: string) => void
  onChange: (value: string, index: number) => void
  icon?: string
  index: number
}) => {
  const [isInputMode, setIsInputMode] = useState(false)
  const [value, setValue] = useState(option.label)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnBlur = () => {
    setIsInputMode(false)
    onChange(value, index)
  }
  const handleOnChange = (e: any) => {
    setValue(e.target.value)
  }
  const handleOnClick = () => {
    setIsInputMode(true)
  }

  useEffect(() => {
    if (isInputMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isInputMode])

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        {icon ? <i className={`fa ${icon} `}></i> : `${index + 1}.`}
        {isInputMode ? (
          <input
            ref={inputRef}
            type="text"
            className="cursor-pointer mx-2"
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        ) : (
          <span className="mx-2" onClick={handleOnClick}>
            {value}
          </span>
        )}
      </div>

      <i
        className="mx-5 fa fa-close cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          onDelete(option.value)
        }}
      ></i>
    </div>
  )
}

export default SingleOption
