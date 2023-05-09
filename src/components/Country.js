import {
  Grid,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material'


const Country = ({ country }) => {
  console.log('country ->', country  )

  if (!country) {
    return (
      <div>
        Loading ...
      </div>
    )
  }

  const openMap = () => {
    const mapAddress = country.maps.openStreetMaps.startsWith('https://') ? country.maps.openStreetMaps :
      `https://${country.maps.openStreetMaps}`
    open(mapAddress)
  }

  return (
    <div>
      <Grid>
        <TableContainer data-testid='country'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={4} >
                  <Typography typography={'h4'}>
                    {country.name.common}{' '}
                    <img src={country.flags.png} alt={country.flags.alt}  style={{ width:'50px', height:'30px' }} />
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center' colSpan={4} >
                  <Typography typography={'h4'}>
                    {country.translations.fin ? country.translations.fin.common : null }{' '}
                    {country.flag}
                    {country.translations.per ? country.translations.per.common : null}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >
                  area:
                </TableCell>
                <TableCell >
                  {country.area.toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                capital:
                </TableCell>
                <TableCell >
                  {country.capital.map(c => c)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  area:
                </TableCell>
                <TableCell >
                  {country.area.toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  population:
                </TableCell>
                <TableCell >
                  {country.population.toLocaleString()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  Languages:
                </TableCell>
                <TableCell >
                  {Object.values(country.languages).map(l => l) +  ' '}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  currencies:
                </TableCell>
                <TableCell >
                  {Object.values(country.currencies).map(c => c.name + ' ' + c.symbol) +  ' '}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  region:
                </TableCell>
                <TableCell >
                  {country.region}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button size='large' variant="contained"  onClick={openMap}>map</Button>
      </Grid>
    </div>
  )
}

export default Country