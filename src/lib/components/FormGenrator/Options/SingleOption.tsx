import { useEffect, useRef, useState } from 'react'
import { Option } from '../../../types/fields'

const SingleOption = ({
  option,
  onDelete,
  icon,
  index,
  onChange,
  edit,
}: {
  option: Option
  onDelete: (id: string) => void
  onChange: (value: string, index: number) => void
  icon?: string
  index: number
  edit?: boolean
}) => {
  const [isInputMode, setIsInputMode] = useState(false)
  const [value, setValue] = useState(option.label)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnBlur = (e: any) => {
    console.log('essss', e)

    setIsInputMode(false)
    onChange(value, index)
  }
  const handleOnChange = (e: any) => {
    setValue(e.target.value)
  }
  const handleOnClick = () => {
    if (edit) setIsInputMode(true)
  }

  useEffect(() => {
    if (isInputMode && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
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
            onChange={handleOnChange}
            onBlur={handleOnBlur}
          />
        ) : (
          <div className="mx-2 w-100" onClick={handleOnClick}>
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

export default SingleOption
