import { Field, Formik, Form, ErrorMessage } from 'formik'
import DatePicker from 'react-datepicker'
import { createRifaValidation } from '../validations/rifaSchema'
import { editRifaValidation } from '../validations/rifaSchema'

//Form CreateRifa
export const FormCreateRifa = ({ createRifaAndNavigate }) => {
  return (
    <Formik
      initialValues={{
        _id: '',
        title: '',
        date: '',
        hour: '',
        numbers: 0,
      }}
      validationSchema={createRifaValidation}
      onSubmit={createRifaAndNavigate}
    >
      {({ setFieldValue, values }) => (
        <Form className="form-formik new-rifa">
          <div className="div-label">
            <label htmlFor="_id">ID:</label>
            <Field type="number" id="_id" name="_id" />
            <ErrorMessage name="_id" component="div" className="error" />
          </div>
          <div className="div-label">
            <label htmlFor="title">Titulo:</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div className="div-label">
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
          <div className="div-label">
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
          <div className="div-label">
            <label htmlFor="numbers">Cantidad de números:</label>
            <Field type="number" id="numbers" name="numbers" />
            <ErrorMessage name="numbers" component="div" className="error" />
          </div>
          <button type="submit" className="btn-create-rifa">
            Crear rifa
          </button>
        </Form>
      )}
    </Formik>
  )
}

export const FormEditRifa = ({
  dataRifa,
  indexArr,
  handleSubmit,
  closeModal,
}) => {
  return (
    <Formik
      initialValues={{
        name: dataRifa.numbers[indexArr].name,
        paid: dataRifa.numbers[indexArr].paid,
      }}
      validationSchema={editRifaValidation}
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
  )
}
