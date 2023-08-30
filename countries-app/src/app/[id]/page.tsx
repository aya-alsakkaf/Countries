import Link from 'next/link'
import prisma from '../../../lib/prisma'

interface pageProps{
    params : {
        id: number
    }
}
async function page({params}: pageProps){
    const country = await prisma.country.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return( 
        <div className=" min-h-screen items-center justify-between p-14">
            <Link href='..' className='font-bold'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>
            </Link>
        <div className='bg-white rounded overflow-hidden shadow-md m-9'>
            
            <img key = {country?.id} src={`${country?.flags}`}className='  h-32 sm:h-48 object-cover' />
            <div className='m-4'>
              <span className='font-bold'>{country?.name}</span>
              <span className='block'><strong>Capital: </strong> {country?.capital}</span>
              <span className='block'><strong>Region: </strong> {country?.region}</span>
              <span className='block'><strong>Subregion:</strong> {country?.subregion}</span>
              <span className='block'><strong>Population</strong> {country?.population}</span>
              <iframe src={`${country?.map}`} className='w-full' height="400" ></iframe>
            </div>
          </div>
          </div>
    
    )
}

export default page;