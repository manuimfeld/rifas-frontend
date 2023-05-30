import axios from "axios";

async function getRifas(id) {
  const url = `${import.meta.env.VITE_GET_RIFAS_URL}/${id}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getRifas;
