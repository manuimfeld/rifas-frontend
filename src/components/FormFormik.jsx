import {Field, Formik, Form, ErrorMessage} from "formik"
import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es requerido"),
});

const FormFormik = ({index}) => {  

  const handleSubmit = (values) => {
    console.log(index, values)

  }

  return (
    <Formik
      initialValues={{
        nombre: "",
        estado_pago: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-formik">
      <div>
          <label htmlFor="nombre">Nombre:</label>
          <Field type="text" id="nombre" name="nombre" />
          <ErrorMessage name="nombre" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="estado_pago">Pagó:</label>
          <Field type="checkbox" id="estado_pago" name="estado_pago" />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  )
}

export default FormFormik