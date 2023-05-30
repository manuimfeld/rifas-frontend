import {Field, Formik, Form, ErrorMessage} from "formik"
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { createRifas } from "../axios/apiRifas"
import {useNavigate} from "react-router-dom"

registerLocale('es', es);
setDefaultLocale('es');

const validationSchema = Yup.object({
  id_rifa: Yup.number().required("Escribí un ID válido (solo números)"),
  titulo_rifa: Yup.string().required("Escribí un título"),
  fecha_rifa: Yup.date().required("Selecciona la fecha de la rifa"),
  horario_rifa: Yup.string().required("Selecciona el horario de la rifa")
});

const CreateRifa = () => {

  const navigate = useNavigate()

  const handleSubmit = (values) => {
    const formattedDate = new Intl.DateTimeFormat('es', {
        day: 'numeric',
        month: 'long',
      }).format(values.fecha_rifa);

      const body = {
        _id: values.id_rifa,
        titulo: values.titulo_rifa,
        fecha: formattedDate,
        horario: values.horario_rifa
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
        id_rifa: "",
        titulo_rifa: "",
        fecha_rifa: "",
        horario_rifa: ""
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        {({ setFieldValue, values }) => (
      <Form className="form-formik">
        <div>
          <label htmlFor="id_rifa">ID:</label>
          <Field type="number" id="id_rifa" name="id_rifa" />
          <ErrorMessage name="id_rifa" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="titulo_rifa">Titulo:</label>
          <Field type="text" id="titulo_rifa" name="titulo_rifa" />
          <ErrorMessage name="titulo_rifa" component="div" className="error" />
        </div>
        <div>
            <label htmlFor="fecha_rifa">Selecciona una fecha:</label>
            <DatePicker
              id="fecha_rifa"
              name="fecha_rifa"
              selected={values.fecha_rifa}
              onChange={(date) => setFieldValue('fecha_rifa', date)}
              dateFormat="dd 'de' MMMM"
              placeholderText="Selecciona una fecha"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              />
            <ErrorMessage name="fecha_rifa" component="div" className="error"/>
        </div>
        <div>
          <label htmlFor="horario_rifa">Selecciona una opción:</label>
          <Field as="select" id="horario_rifa" name="horario_rifa">
            <option value="">Seleccionar...</option>
            <option value="Matutina">Primera</option>
            <option value="Vespertina">Matutina</option>
            <option value="Inicio">Vespentina</option>
            <option value="Fin">Nocturna</option>
          </Field>
          <ErrorMessage name="horario_rifa" component="div" className="error"/>
        </div>
        <button type="submit">Enviar</button>
      </Form> )}
    </Formik>
    </main>
  )
}

export default CreateRifa