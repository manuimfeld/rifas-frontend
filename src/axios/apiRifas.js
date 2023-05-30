import axios from 'axios'

export const getRifas = async (id) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}`
  try {
    const response = await axios.get(url)
    console.log(response.data, url)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createRifas = async (body) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/create`
  try {
    const response = await axios.post(url, body)
    console.log(body)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const editRifas = async (id, body) => {
  const url = `${import.meta.env.VITE_RIFAS_URL}/rifas/${id}/numeros/${
    body.numero
  }`
  try {
    const response = await axios.put(url, {
      nombre: body.nombre,
      estado_pago: body.estado_pago,
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
