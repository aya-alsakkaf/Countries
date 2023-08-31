import prisma from '../../lib/prisma'
import { CountryCard } from './components/countryCard';
import SearchBar from './components/searchBar';

//main page where the user can search for a country or view all the countries


//getCountries returns all the countries in the database
function getCountries() {
  return prisma.country.findMany()
}


export default async function Home() {

 const countries = await getCountries()

  return (
    <div>
      <SearchBar/>
      <div className=''>
        <h1 className='text-center font-bold text-white text-2xl mt-9'> List Of Countries </h1>
      </div>
    
      <CountryCard countries={countries} />

    </div>
  )
}

