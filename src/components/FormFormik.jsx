import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { editRifas } from '../axios/apiRifas'

const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
})

const FormFormik = ({ dataRifa, indexArr }) => {
  const handleSubmit = (values) => {
    const body = {
      paid: values.paid,
      name: values.name,
      number: indexArr,
    }
    console.log(body)
    editRifas(dataRifa._id, body)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        paid: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-formik">
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
      </Form>
    </Formik>
  )
}

export default FormFormik
