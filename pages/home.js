/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
          src="https://www.kindpng.com/picc/m/137-1372564_book-clip-art-students-clipart-hd-png-download.png"
          alt="" />
    <header className="text-gray-600 body-font relative">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">CVR COLLEGE</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 font-semibold text-2xl justify-center">HOME </a>
      <a className="mr-5 hover:text-gray-900 font-semibold text-2xl justify-center">ABOUT US </a>
      <a className="mr-5 hover:text-gray-900 font-semibold text-2xl justify-center">CONTACT</a>
     
    </nav>
    <div className=''>
    <Link href="/login"><button className="inline-flex items-center bg-gray-300 border-0 py-3 px-4 focus:outline-none hover:bg-gray-400 rounded  mt-4 md:mt-0 font-medium text-xl mx-6">
      log in
    </button>
    </Link>
    <Link href="/signup"><button className="inline-flex items-center bg-gray-300 border-0 py-3 px-4 focus:outline-none hover:bg-gray-400 rounded  mt-4 md:mt-0 font-medium text-xl">
    admin login
    </button>
    </Link>
  </div>
  </div>
</header>
   </div>
  )
}
