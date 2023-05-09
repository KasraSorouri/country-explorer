import axios from 'axios'

const baseUri = 'https://restcountries.com/v3.1/all'

const getAllCountries = async () => {
  const result = await axios.get(baseUri)
  return result.data
}

export default {
  getAllCountries
}