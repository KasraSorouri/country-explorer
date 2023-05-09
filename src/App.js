import { useState, useEffect } from 'react'

import services from './services/country'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const countries = async() => {
      const data = await services.getAllCountries()
      setCountries(data)
    }
    countries()
  },[])

  return (
    <div>
      <Countries countries={countries} />
    </div>
  )
}

export default App
