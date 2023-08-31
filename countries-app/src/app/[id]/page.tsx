import prisma from '../../../lib/prisma'
import BackButton from '../components/backButton'
import Iframe from 'react-iframe'

//Page that displays the information of a country based on the id

interface pageProps {
    params: {
        id: number
    }
}
async function page({ params }: pageProps) {
    const country = await prisma.country.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return (
        <div className=" bg-customeBG min-h-screen items-center justify-between p-14">
            <BackButton />
            <div className='text-white rounded overflow-hidden shadow-md m-9'>

                <img key={country?.id} src={`${country?.flags}`} className='  h-32 sm:h-48 object-cover' />
                <div className='m-4'>
                    <span className='font-bold text-3xl text-countryText'>{country?.name}</span>
                    <span className='block text-xl'><strong className='text-focusedText'>Capital: </strong> {country?.capital}</span>
                    <span className='block text-xl'><strong className='text-focusedText'>Region: </strong> {country?.region}</span>
                    <span className='block text-xl'><strong className='text-focusedText'>Subregion:</strong> {country?.subregion}</span>
                    <span className='block text-xl'><strong className='text-focusedText'>Population: </strong> {country?.population}</span>
                    <Iframe url={`${country?.map}`} className="w-full mt-4" height='400px'></Iframe>
                </div>
            </div>
        </div>

    )
}

export default page;