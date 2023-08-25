import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

const OptionsDisplayType = ({
  value = false,
  onChange,
  label,
  edit = false,
  id,
}: {
  value: boolean | undefined
  onChange: any
  label?: string
  edit: boolean
  id: string
}) => {
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(value)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (onChange) onChange('displayType', e.target.checked)
  }

  const labelId = useMemo(() => id + '_displayType', [id])

  return (
    <span>
      <input
        type="checkbox"
        checked={checked}
        id={labelId}
        className="form-check-input"
        onChange={handleChange}
        name={labelId}
        value={labelId}
        disabled={!edit}
      />
      <label className="form-check-label mx-2 cursor-pointer" htmlFor={labelId}>
        {label ?? 'Display Type'}
      </label>
    </span>
  )
}

export default OptionsDisplayType
