import axios from "axios";

async function getRifas(id) {
  const url = `${import.meta.env.GET_RIFAS_URL}/${id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getRifas;
