import axios from 'axios'

//GetRifaById
export const getRifaById = async (id) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

//Create rifa
export const createRifa = async (body) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/create`
  try {
    const response = await axios.post(url, {
      _id: body._id,
      title: body.title,
      date: body.date,
      hour: body.hour,
      numbers: body.numbers,
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editRifa = async (id, body, closeModal) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}/numeros`
  try {
    const response = await axios.put(url, {
      name: body.name,
      paid: body.paid,
      number: body.number,
    })
    closeModal()
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
