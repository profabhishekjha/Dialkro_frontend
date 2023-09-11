import React from 'react'
import Ratings from './Ratings'
import { faker } from '@faker-js/faker'

const Hero_pg2 = () => {
  return (
    <div>
      <div className="mt-5 grid p-5">
        <div className="rounded-xl border p-10">
          <div className="relative mb-10 flex items-center justify-center gap-10 rounded-lg border py-10">
            <div className="relative  h-52 overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-52 w-full object-cover" src={faker.image.url()} alt="Card Image" />
            </div>
            <div className="relative h-52 overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-52 w-full object-cover" src={faker.image.url()} alt="Card Image" />
            </div>
            <div className="relative  h-52 overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-52 w-full object-cover" src={faker.image.url()} alt="Card Image" />
            </div>
            <div className="relative  h-52 overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-52 w-full object-cover" src={faker.image.url()} alt="Card Image" />
            </div>
            <div className="mr-10 grid gap-10">
              <div className="relative  h-20 overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  className="h-20 w-full object-cover"
                  src={faker.image.url()}
                  alt="Card Image"
                />
              </div>

              <div className="relative mx-auto h-20 overflow-hidden rounded-lg bg-white shadow-lg">
                <img
                  className="h-20 w-full object-cover"
                  src={faker.image.url()}
                  alt="Card Image"
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="rounded-lg border p-10">
            <div className="">
              <p>Transport</p>
              <p>ratings</p>
              <p>opens in somethime</p>
              <p>
                For all those people who love Japanese food. This place is a must visit in worli
                village, although the location is not that great but once you enter the restaurant
                their elaborate menu and options for cocktails is amazing, do try their sushi and
                katsu curry.
              </p>
            </div>
            <div className="my-5">
              <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  {' '}
                  7746885707{' '}
                </span>
              </button>
              <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  {' '}
                  Details
                </span>
              </button>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Whataspp
              </button>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-2xl bg-sky-700 px-5 py-2.5 text-[2rem] font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                4.3
              </button>
              <p className="p-5">⭐⭐⭐⭐⭐</p>
              <div className="flex">
                <div className="h-[100px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-10 dark:opacity-50"></div>
                <div className="p-7">
                  <h1>16 Ratings</h1>
                  <p>Dial kro rating index based on 16 ratings across the web</p>
                </div>
              </div>
            </div>
            <div className="">
              <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              <Ratings />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero_pg2
