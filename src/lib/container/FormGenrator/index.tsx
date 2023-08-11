import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ToolbarSection from '../../components/FormGenrator/ToolbarSection'
import FieldEditSection from '../../components/FormGenrator'
import { FormField } from '../../types/fields'
import { FormGenratorContext } from '../../context/FormContext'
import { IToolbarItem } from '../../types/toolbar'

export const FormGenrator = ({
  data,
  onChange,
  toolBar,
}: {
  data?: Array<FormField>
  onChange?: any
  toolBar?: Array<IToolbarItem>
}) => {
  const [formData, setFormData] = useState<Array<FormField>>([])
  const [provider, setProvider] = useState<any>()

  useEffect(() => {
    if (data) setFormData(data ?? [])
  }, [data])

  const handleChangeFormData = useCallback(
    (newFormData: Array<FormField>) => {
      onChange(newFormData)
    },
    [onChange],
  )

  const value = useMemo(
    () => ({ formData, setFormData, handleChangeFormData, toolBar, provider, setProvider }),
    [formData, setFormData, handleChangeFormData, toolBar, provider, setProvider],
  )

  return (
    <FormGenratorContext.Provider value={value}>
      <div>
        <div className="form-builder">
          <div className="d-flex align-items-center px-4 py-3 bg-white topbar">
            <h6 className="fw-bold mb-0">Add Template</h6>
            <div className="ms-auto">
              <button type="button" className="btn btn-outline-defult">
                Cancel
              </button>
              <button type="button" className="btn mx-3 btn-outline-darkblue">
                Preview
              </button>
              <button type="button" className="btn btn-darkblue">
                Save
              </button>
            </div>
          </div>
          <div className="d-flex">
            <ToolbarSection />
            <FieldEditSection />
          </div>
        </div>
      </div>
    </FormGenratorContext.Provider>
  )
}
