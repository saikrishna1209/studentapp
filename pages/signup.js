/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Link from 'next/link'
export default function signup() {
  return (
    <><div>signup</div><><img className="absolute top-0 bottom-0 h-[100%] w-[100%] object-cover "
          src="https://www.kindpng.com/picc/m/137-1372564_book-clip-art-students-clipart-hd-png-download.png"
          alt="" />
          <div className="grid h-screen place-items-center">
              <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg w-1/4 p-10  relative bg-white ">
                  <h1 className="mt-10 font-semibold text-2xl text-center">
                    admin login 
                  </h1>
                  <div className="mt-10">
                      <h1>EmailAddress</h1>
                      <input
                          type="text"
                          class="py-2 w-full border border-solid rounded-lg border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-orange-500"
                          placeholder="" />
                  </div>
                  <div className="mt-2">
                      <h1>Password</h1>
                      <input
                          type="password"
                          class="py-2 w-full border border-solid rounded-lg border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-orange-500"
                          placeholder="" />
                  </div>
                  <div className="mt-2">
                      <h1> repeat Password</h1>
                      <input
                          type="password"
                          class="py-2 w-full border border-solid rounded-lg border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-orange-500"
                          placeholder="" />
                  </div>
                  <div className="flex gap-24 mt-3   ">
                      <div className="text-sm mt-1 hover:underline underline-offset-1">
                          <Link href="">Are you a new user? </Link>
                      </div>
                      <div className="text-sm mt-1 text-orange-600 hover:text-orange-500">
                          <Link href="/forgot">Forgot your password?</Link>
                      </div>

                  </div>
                  <div className="mt-2">
                      <button
                          type="submit"
                          className=" bg-orange-600 text-white  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700  ease-in-out w-full py-2 mt-2"
                      >
                          <Link href="/details">sign in </Link>
                      </button>
                  </div>
              </div>
          </div></></>

  )
}
