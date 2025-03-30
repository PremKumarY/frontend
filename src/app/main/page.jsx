import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function page() {
    return (
        

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <Link href="/">
                    <button className="mt-4 text-lg flex ml-5 md:w-auto justify-center md:justify-start border-2  items-center font-extrabold bg-gradient-to-r   bg-clip-text py-1 px-2 rounded-lg hover:text-xl ease-in duration-300 cursor-pointer">
                        <FaArrowLeft className="mr-2 text-amber-200 text-lg " /> 
                    </button>
                </Link>
                <div className="text-center text-3xl text-white">main</div>
            </div>

    )
}
