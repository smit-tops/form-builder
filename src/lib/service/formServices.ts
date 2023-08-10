const saveForm = (form: Array<any>) => {
  localStorage.setItem('formData', JSON.stringify(form))
}

const getForm = () => {
  const formData = localStorage.getItem('formData') || '[]'
  return JSON.parse(formData)
}

const addField = (field: any) => {
  const form = getForm()
  const newForm = [...form]
  newForm.push(field)
  saveForm(newForm)
  return newForm
}

export { saveForm, getForm, addField }
