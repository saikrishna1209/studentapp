/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { demoResume } from "../../lib/data";
export default function profile() {
  return (
    <>
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
                    <a href="/dashboard/publications">PUBLICATIONS</a>
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

          <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
     
    <div class="container main-page bg-white w-[210mm] h-[297mm] m-10 overflow-auto drop-shadow-2x  p-0 min-w-[210mm]">
        <div>
            <div class="grid grid-cols-4 gap-3 h-auto">
                <div class="border-1 w-full">
                <div class="bg-yellow-400 col-span-3 flex flex-col h-40">
                    <h1 class="text-5xl font-semibold px-12 border-l py-4 ">SESBASTIAN </h1>
                    <h1 class="text-5xl font-semibold px-12 "> WILDER</h1>
                    <h2 class="px-14 ">student</h2>
                </div>
               
            </div>
       
        </div>
        <div>
            <div class="bg-white h-auto py-4  px-16 ">
                <h2 class="text-white bg-neutral-900 p-1 inline">DETAILS</h2>
                <h3>4200 pallistinew avenue,RiverDale,NY 10471 </h3>
                <h3>United States</h3>
                <h3>hw12@yahoo.com</h3>
                <h3>(917)324-1818</h3>
                <h1>aadhar no:5358 3777 1233</h1>
                <h2>pan no:BYTZtu123484u</h2>
                
            </div>
            <div class="bg-white h-auto py-2  px-16">
                <h2 class="text-white bg-neutral-900 inline p-1">PROFILE</h2>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error omnis eligendi ea tenetur ut fugit dicta molestiae labore delectus natus facilis, in deserunt iusto a, facere mollitia. Voluptatem, necessitatibus ad!</h4>
                
                           

            </div>
            <div class="bg-white h-auto py-2 px-16">
                <h2 class="text-white bg-neutral-900 inline p-1">EDUCATION</h2>
                <h1 class="text-black  font-medium ">Bachelors of Communucation,New York University,NewYork</h1>
                <h6 class="text-gray-400 text-sm">Agust 2016-present</h6>
                
                    <li class="px-20 list-disc">Working Towards a Communications Degree.</li>
                    <h1 class="text-black  font-medium ">High School Diploma,Regis High School,NewYork</h1>
                    <h6 class="text-gray-400 text-sm">September 2012-May 2016</h6>
                    <li class="px-20 list-disc">Graduated With High Honors</li>
            </div>
            <div class="bg-white h-auto py-2 px-16 ">
                <h2 class="text-white bg-neutral-900 inline p-1">EMP HISTORY</h2>
                <h1 class="text-black  font-medium ">Sales Associate,Big Apple Bookstore,NewYok</h1>
                <h6 class="text-gray-400 text-sm">September 2015-June 2018 </h6>
                <li class="px-20 list-disc">Greeted Customers and assisted them with finding </li>
                <li class="px-20 list-disc">offered litrecy sugestions based on needs and desire</li>
                <li class="px-20 list-disc">Followed directions from my suprviser and managed</li>
                <li class="px-20 list-disc">Organized books and adhered to the policies</li>

                
            </div>
            <h2 class="text-white bg-neutral-900 inline p-1 ml-16">SKILLS</h2>
            <div class="grid grid-cols-2 border-none  h-40 p-2 px-16 " >
                <div class="border-none gap-1 px-1 ">Advanced Communication
                    
                    <h1 class="w-[90%] h-2 bg-black my-2"></h1>
                </div>
                <div class="border-none gap-1 px-1">java
                    <h1 class="w-[70%] h-2 bg-black my-2"></h1>
                </div>
                <div class="border-none gap-1 px-1">motivated attitude
                    <h1 class="w-[80%] h-2 bg-black my-2"></h1>
                </div>
                <div class="border-none gap-1 px-1">python
                    <h1 class="w-[60%] h-2 bg-black my-2"></h1>
                </div>
            </div>
            <h2 class="text-white bg-neutral-900 inline p-1 ml-16">LANGUAGES</h2>
            <div class="grid grid-cols-2  h-20 p-2 px-16">
                <div class=" border-none gap=2  h-20">French
                    <h1 class="w-[70%] h-2 bg-black my-3"></h1>
                </div>
                <div class=" border-none gap=2 h-20">Dutch
                    <h1 class="w-[80%] h-2 bg-black my-3"></h1>
                </div>
            </div>
        </div>

    </div>
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
            <button className='mt-0 border-2     '>
              edit profile 
            </button>
        </div>
      </div>
   

   </>
  
    
  )
}
