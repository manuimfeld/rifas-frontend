import axios from 'axios'

export const getRifas = async (id) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createRifas = async (body) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/create`
  try {
    const response = await axios.post(url, {
      _id: body._id,
      title: body.title,
      date: body.date,
      hour: body.hour,
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editRifas = async (id, body) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}/numeros`
  try {
    const response = await axios.put(url, {
      name: body.name,
      paid: body.paid,
      number: body.number,
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
