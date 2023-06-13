import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'
import { createRifa } from '../axios/apiRifas'
import { useNavigate } from 'react-router-dom'
import { FormCreateRifa } from '../components/Forms'

//date
registerLocale('es', es)
setDefaultLocale('es')

const CreateRifa = () => {
  const navigate = useNavigate()

  const createRifaAndNavigate = async (values) => {
    //date
    const formattedDate = new Intl.DateTimeFormat('es', {
      day: 'numeric',
      month: 'long',
    }).format(values.fecha_rifa)

    //form values
    const body = {
      _id: values._id,
      title: values.title,
      date: formattedDate,
      hour: values.hour,
    }

    try {
      await createRifa(body)
      navigate(`/rifa/${body._id}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="create-rifa">
      <h1>Detalles de la rifa</h1>
      <FormCreateRifa createRifaAndNavigate={createRifaAndNavigate} />
    </main>
  )
}

export default CreateRifa
