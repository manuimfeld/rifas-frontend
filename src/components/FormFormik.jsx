import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { editRifas } from '../axios/apiRifas'

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
})

const FormFormik = ({ dataRifa, indexArr, closeModal }) => {
  const handleSubmit = (values) => {
    const body = {
      paid: values.paid,
      name: values.name,
      number: indexArr,
    }
    console.log(body)
    editRifas(
      dataRifa._id,
      body,
      closeModal,
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          paid: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-formik new-number">
          <p>Número: {indexArr + 1}</p>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="paid">Pagó:</label>
            <Field type="checkbox" id="paid" name="paid" />
          </div>
          <button type="submit">Guardar</button>
          <button onClick={closeModal} className="btn-close-modal">
            Cerrar menú
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default FormFormik
