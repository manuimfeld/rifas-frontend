import * as Yup from 'yup'

export const createRifaValidation = Yup.object({
  _id: Yup.number().required('Escribí un ID válido (solo números)'),
  title: Yup.string().required('Escribí un título'),
  date: Yup.date().required('Selecciona la fecha de la rifa'),
  hour: Yup.string().required('Selecciona el horario de la rifa'),
})

export const editRifaValidation = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
})
