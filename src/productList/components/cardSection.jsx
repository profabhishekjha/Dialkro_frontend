/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { faker } from '@faker-js/faker'
import { Heart } from 'lucide-react'
import { toast } from 'react-hot-toast'
const CardSection = ({ onClick }) => {
  const [value] = React.useState(3)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div>
      <div className="container relative flex w-[80vw] rounded-lg border-2">
        <div className="relative flex gap-5 p-10">
          <div className="relative mx-auto h-60  overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              className="h-60 w-full cursor-pointer object-cover"
              onClick={onClick}
              src={faker.image.url()}
              alt="Card Image"
            />
          </div>
          <div className="grid gap-3">
            <div className="">
              <p onClick={onClick} className="cursor-pointer text-xl font-bold capitalize">
                {' '}
                {faker.commerce.productName()}{' '}
              </p>
              <Rating name="read-only" value={value} readOnly />
              <p className="cursor-pointer text-lg font-bold uppercase">
                {faker.company.buzzVerb()}
              </p>
              <p className=" my-2 w-3/4 ">{faker.commerce.productDescription()}</p>
              <h1 className="my-5 text-xl font-bold">₹ {faker.commerce.price()}</h1>
            </div>
            <div className="flex  gap-5">
              <a href="">
                <img src="/socials/telephone.svg" alt="DialKro" className="w-10" />
              </a>
              <a href="">
                <img src="/socials/whatsapp.svg" alt="DialKro" className="w-10" />
              </a>

              {/* <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  {' '}
                  Menu
                </span>
              </button> */}
            </div>
          </div>
        </div>
        <Heart
          className="absolute right-10 top-10 cursor-pointer"
          color={`${isFavorite ? 'red' : 'black'}`}
          fill={`${isFavorite ? 'red' : 'white'}`}
          onClick={() => {
            setIsFavorite(!isFavorite)
            if (!isFavorite) {
              toast.success('Added to Favorites')
            } else {
              toast.error('Removed from Favourites')
            }
          }}
        />
      </div>
    </div>
  )
}

export default CardSection
