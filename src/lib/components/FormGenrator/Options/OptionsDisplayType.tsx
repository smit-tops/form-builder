import React, { useEffect, useMemo, useState } from 'react'
import { IDisplayType } from '../../../types/fields'

const OptionsDisplayType = ({
  value = 'vertical',
  onChange,
  label,
  edit = false,
  id,
}: {
  value?: IDisplayType
  onChange: any
  label?: string
  edit: boolean
  id: string
}) => {
  const [checked, setChecked] = useState<IDisplayType>('vertical')

  useEffect(() => {
    setChecked(value)
  }, [value])

  const handleChange = (value: IDisplayType) => {
    setChecked(value as IDisplayType)
    if (onChange) onChange('displayType', value)
  }

  const labelId = useMemo(() => id + '_displayType', [id])

  return (
    <div className="">
      <label className="form-check-label cursor-pointer flex-grow-4" htmlFor={labelId}>
        {label ?? 'Display Type'}
      </label>
      {!edit && <span className="mx-2 btn btn-tag disabled btn-primary text-capitalize">{checked}</span>}

      {edit && (
        <div className="btn-group mx-2" role="group" aria-label="First group">
          <button
            onClick={() => handleChange('horizontal')}
            type="button"
            className={`btn btn-primary ${checked === 'horizontal' ? 'active' : ''}`}
            disabled={!edit}
          >
            Horizontal
          </button>

          <button
            onClick={() => handleChange('vertical')}
            type="button"
            className={`btn btn-primary ${checked === 'vertical' ? 'active' : ''}`}
            disabled={!edit}
          >
            Vertical
          </button>
        </div>
      )}
    </div>
  )
}

export default OptionsDisplayType
