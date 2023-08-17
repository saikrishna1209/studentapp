/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Link from 'next/link'

export default function details() {
  return (
    <div>
        <img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover  "
          src="https://www.kindpng.com/picc/m/137-1372564_book-clip-art-students-clipart-hd-png-download.png"
          alt="" />
        <div class="mt-16 sm:mx-auto sm:w-full sm:max-w-2xl relative ">
          <div class="bg-white pt-1 pb-8 shadow-xl rounded-xl px-10">
            <div class="my-6 flex justify-between items-center">
              <div class="">
                <span class="text-xs font-semibold">Signed In As : </span>
                <span class="text-sm font-bold text-gray-600">
                  saikrishna@gmail.com
                </span>
              </div>
              <button
                class="font-semibold text-cyan-600 text-sm underline hover:text-cyan-800"
                fdprocessedid="paknmg"
              >
                <Link href="/">Logout</Link>
              </button>
            </div>
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 class="mt-2 text-center text-3xl font-bold text-gray-900">
                Fill in your details
              </h2>
            </div>
            <form>
              <fieldset class="mt-4">
                <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      id="student"
                      name="notification-method"
                      value="student"
                      class="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300"
                     
                    />
                    <label
                      for="student"
                      class="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      student
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      id="college"
                      name="notification-method"
                      value="college"
                      class="focus:ring-cyan-500 h-4 w-4 text-cyan-600 border-gray-300"
                    />
                    <label
                      for="college"
                      class="ml-3 block text-sm font-medium capitalize text-gray-700"
                    >
                      college
                    </label>
                  </div>
                </div>
              </fieldset>
              <div class="col-span-6 sm:col-span-4 mt-4">
                <div class="flex">
                  <label
                    for="paraphase"
                    class="block text-sm font-medium text-gray-700"
                  >
                    
                    Paraphase
                  </label>
                  <span class="ml-1 text-red-600 font-semibold">*</span>
                </div>
                <div class="flex items-center">
                  <input
                    type="text"
                    
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    
                  />
                  <div>
                    <button
                      type="button"
                      class="ml-3 mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-cyan-700 bg-cyan-100 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      fdprocessedid="ekxexs"
                    >
                      Verify
                    </button>
                  </div>
                </div>
                <p
                  class="mt-1 text-xs tracking-wide text-gray-500"
                 
                >
                  Enter a passphrase that associates with your college placement
                  cell.
                </p>
              </div>
              <div class="grid grid-cols-6 gap-6 mt-4">
                <div class="col-span-6 sm:col-span-2 ">
                  <div class="flex">
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                   
                   
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    
                  />
                </div>
                <div class="col-span-6 sm:col-span-2 ">
                  <div class="flex">
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    
                  />
                </div>
                <div class="col-span-6 sm:col-span-2 relative -top-[23px]">
                  <label
                    class="flex items-center mb-1 h-full text-sm font-medium text-gray-700 "
                    id="headlessui-listbox-label-1"
                  >
                    Gender
                    <span class="ml-1 mt-1 text-red-600 font-semibold">*</span>
                  </label>
                  <div class="relative -top-5 left-0">
                    <button
                      class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      id="headlessui-listbox-button-2"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="headlessui-listbox-label-1 headlessui-listbox-button-2"
                      fdprocessedid="eijr6h"
                    >
                      <span class="block truncate text-black">Male</span>
                      <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="h-5 w-5 text-gray-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="rollnumber"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Roll Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="text"
                    name="rollnumber"
                    id="rollnumber"
                   
                   
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                   
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 mt-4">
                  <div class="flex">
                    <label
                      for="phone"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <span class="ml-1 text-red-600 font-semibold">*</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    required=""
                 
                    pattern="[6789][0-9]{9}"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    
                  />
                </div>
              </div>
              <div class="relative">
                <div class="flex">
                  <label class="mt-4 mb-2 block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <span class="relative top-4 ml-1 text-red-600 font-semibold">
                    *
                  </span>
                </div>
                <div class="relative">
                  <input
                    type="text"
                    required=""

                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-500"
                    
                  />
                </div>
              </div>
              <div class="mt-4">
                <button
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 "
                  fdprocessedid="2gz5pi"
                >
                 <Link href="dashboard/books"> Submit</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      
    
    </div>
    

  )
}
