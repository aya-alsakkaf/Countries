import Link from "next/link"

export default function BackButton(){
    return (
        <Link href='/' className='font-bold'>

                <button type="button" className=" tranisition ease-in-out delay-150 text-white bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    <svg className="w-6 h-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>

                    Go Back

                </button>
        </Link>
    )
}