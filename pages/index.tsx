/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
    <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
          src="https://i.pinimg.com/originals/9a/32/35/9a3235e2d748b583f17adb3892cd4fc4.gif"
          alt="" />
          <div className='justify-center pt-[150px] pl-[400px]'>
   <button className='className=" bg-black text-white relative rounded  hover:bg-slate-600 hover:shadow-lg focus:bg-orange-700  ease-in-out w-[30%] py-2 mt-96  ml-96'>
    <Link href={'/home'}>get started</Link>
   </button>
   </div>
  </div>
  )
}
