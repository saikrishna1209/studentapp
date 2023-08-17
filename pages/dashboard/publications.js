/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React from 'react'
export default function publications() {
  return (
    <><div></div><div>
    <div className="w-full">
      <div className="bg-slate-50  h-[285mm] m-5 overflow-auto drop-shadow-2xl flex flex-row-reverse ">
        <div className="w-[25%] z-10 bg-slate-800 h-[100] p-5">
          <div className="mt-44">
            <div className=" px-2 text-white font-thin ml-2">
              <ul>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/main">DASHBOARD</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/profile">PROFILE</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/subjects">SUBJECTS</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/workshop">WORKSHOPS</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/publications">ATTENDSANCE</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/books">BOOKS</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/awards">AWARDS</a>
                </li>
                <li className="p-5 text-2xl">
                  <a href="/dashboard/reports">REPORTS</a>
                </li>
                <li className="p-5 text-2xl">
                  <button className="p-3 text-2xl border-2 border-white rounded-lg">
                    <a href="/">LOGOUT</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[85%] z-10 bg-slate-300 p-5 mt-36">

          <div class="grid grid-cols-2 gap-8 p-14 bg-slate-400">
            <div class=" ">
              <div className="bg-slate-300 border-solid border-2 border-black">
                <h1 className="text-2xl font-bold  m-0.5 p-20">
                <Link href={"https://www.sanfoundry.com/best-reference-books-btech-1st-year/"}>Network Theory Study Material</Link>

                </h1>

              </div>
            </div>
            <div class=" border-solid border-2 border-black bg-slate-300">
              <h1 className="text-2xl font-bold  m-0.5 p-20">
               ATTENDANE OF ASTUDENT
               (75%)
              </h1>
            </div>
            <div class="  border-solid border-2 border-black bg-slate-300">
              <h1 className="text-2xl font-bold  m-0.5 p-20">
              <Link href={"/https://www.ncertbooks.guru/b-tech-books/"}>REMARKS OF ASTUDENT </Link>
              </h1>
            </div>
          </div>


        </div>

        <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex text-4xl font-serif mt-2">
          <h1 className='mt-8 ml-4'>Student management system </h1>


        </div>
        <img
          src="https://randomuser.me/api/portraits/men/40.jpg"
          alt=""
          className=" absolute top-6 right-10 z-30 h-32 rounded-full   " />
      </div> 
    </div>
  </div></>
   
  )
}