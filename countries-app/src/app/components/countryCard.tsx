import Link from "next/link"

// Component that displays the countries in a grid

type countries = {
    id: number;
    name: string;
    population: number | null;
    capital: string | null;
    region: string | null;
    subregion: string | null;
    flags: string | null;
    map: string | null;
  }


type countryProp={
    countries : countries[]
}


export const CountryCard = ({countries}:countryProp) => {
    return (
        <main className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-2 items-center justify-between p-14 scroll-smooth">
        { 
      
          countries.map(country => (
            <div key={country.id}>
            <Link href={`/${country.id}/`}>
            <div className='bg-white rounded overflow-hidden shadow-md transition ease-in-out hover:scale-110 '>
            <img src={`${country.flags}`}className='w-full h-32 sm:h-48 object-cover brightness-50 hover:brightness-100 saturate-150' />
            <div className='m-4'>
              <span className='font-bold text-xl' >{country.name}</span>
              <span className='block text-lg'> <strong className="text-focusedText">Capital: </strong>{country.capital}</span>
            </div>
          </div>
          </Link>
          </div>
          ))
        }

      </main>
    )
}