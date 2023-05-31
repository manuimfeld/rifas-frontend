import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import { createRifas } from '../axios/apiRifas'
import { useNavigate } from 'react-router-dom'

registerLocale('es', es)
setDefaultLocale('es')

const validationSchema = Yup.object({
  _id: Yup.number().required('Escribí un ID válido (solo números)'),
  title: Yup.string().required('Escribí un título'),
  date: Yup.date().required('Selecciona la fecha de la rifa'),
  hour: Yup.string().required('Selecciona el horario de la rifa'),
})

const CreateRifa = () => {
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    const formattedDate = new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'long',
    }).format(values.fecha_rifa)

    const body = {
      _id: values._id,
      title: values.title,
      date: formattedDate,
      hour: values.hour,
    }

    const callApi = async () => {
      try {
        await createRifas(body)
        navigate(`/rifa/${body._id}`)
      } catch (error) {
        console.error(error)
      }
    }
    callApi()
  }

  return (
    <main>
      <Formik
        initialValues={{
          _id: '',
          title: '',
          date: '',
          hour: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className="form-formik">
            <div>
              <label htmlFor="_id">ID:</label>
              <Field type="number" id="_id" name="_id" />
              <ErrorMessage name="_id" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="title">Titulo:</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="date">Selecciona una fecha:</label>
              <DatePicker
                id="date"
                name="date"
                selected={values.date}
                onChange={(dateMap) => setFieldValue('date', dateMap)}
                dateFormat="dd 'de' MMMM"
                placeholderText="Selecciona una fecha"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="hour">Selecciona una opción:</label>
              <Field as="select" id="hour" name="hour">
                <option value="">Seleccionar...</option>
                <option value="Matutina">Primera</option>
                <option value="Vespertina">Matutina</option>
                <option value="Inicio">Vespentina</option>
                <option value="Fin">Nocturna</option>
              </Field>
              <ErrorMessage name="hour" component="div" className="error" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </main>
  )
}

export default CreateRifa
