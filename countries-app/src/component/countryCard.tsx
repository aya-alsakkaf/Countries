"use client"

type CountryProps = {
    id: number
    name: string
    capital: string
    population: number
    flag: string
    region: string
    subregion: string
}

export function countryCard ({id, name, capital, population, flag, region, subregion}: CountryProps) {
    return (
        <div className='bg-white rounded overflow-hidden shadow-md'>
          <img src={flag} className='w-full h-32 sm:h-48 object-cover' />
          <div className='m-4'>
            <span className='font-bold'>{name}</span>
            <span className='block'>Capital: {capital}</span>
          </div>
        </div>
    )
}