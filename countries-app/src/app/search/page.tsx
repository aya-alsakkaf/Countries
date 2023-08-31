
import Link from "next/link"
import prisma from "../../../lib/prisma"
import { CountryCard } from "../components/countryCard"
import SearchBar from "../components/searchBar"
import BackButton from "../components/backButton"

interface SearchPageProps{
    searchParams: {query:string}
}
export default async function SearchPage({searchParams:{query}} : SearchPageProps){

    const countries = await prisma.country.findMany({
        where:{
            name:{contains:query}
        }
    }
    )

    if (countries.length === 0){
        return (
          <div className="items-center">

            <SearchBar></SearchBar>

            <h1 className="text-center text-red-600 text-3xl mt-8">No Country Found</h1>

          </div>
        
        
        )
    }
    else{
        return (
          <>
            <SearchBar/>
            <div className='ml-6 mt-7'>
              <BackButton/>
            </div>
            <CountryCard countries={countries} />
          </>
          
        )
    }


}