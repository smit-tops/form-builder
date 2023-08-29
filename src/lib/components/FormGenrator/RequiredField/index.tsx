import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

const RequiredField = ({
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
    if (onChange) onChange('required', e.target.checked)
  }

  const labelId = useMemo(() => id + 'required', [id])

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
      <label className="form-check-label mx-2" htmlFor={labelId}>
        {label ?? 'Required'}
      </label>
    </span>
  )
}

export default RequiredField
