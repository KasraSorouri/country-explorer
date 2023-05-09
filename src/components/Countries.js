import { useState } from 'react'
import Country from './Country'
import {
  Autocomplete,
  TextField,
} from '@mui/material'

const Countries = ({ countries }) => {
  const [country, setCountry] = useState(null)

  let filteredCountries = []
  const handleCountryListFilter = (event) => {
    filteredCountries = countries.filter(ctry => ctry.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
  }
  const countryList = filteredCountries.length > 0 ? filteredCountries : countries

  const handelSelectedCountry = (selected) => {
    setCountry(selected.target.value)
  }

  return (
    <div>
      <Autocomplete
        id='country'
        name='country'
        sx={{
          flex: 1,
          minWidth: '300px',
          maxWidth:'600px' }}
        options={countryList}
        getOptionLabel={(option) => `${option.name.common}`}
        value={country}
        defaultValue={country}
        onChange={(event, newValue) => {
          handelSelectedCountry({ target: { name: 'country', value: newValue } })}}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Country'
            onChange={handleCountryListFilter}
          />
        )}
      />
      { country? <Country country={country} /> : null }
    </div>
  )
}

export default Countries