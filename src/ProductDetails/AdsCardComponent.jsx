import React from 'react'
import { faker } from '@faker-js/faker'

const AdsCardComponent = ({ onClick }) => {
  return (
    <div>
      <div className="container relative flex flex-wrap items-center justify-center rounded-lg">
        <div className="relative mt-4 flex w-[380px] flex-col items-center justify-center rounded-lg border p-5">
          <div className="relative mx-auto h-60 overflow-hidden rounded-lg bg-white shadow-lg">
            <img
              className="h-60 w-full cursor-pointer object-cover"
              onClick={onClick}
              src={faker.image.url()}
              alt="Card Image"
            />
            <div className="absolute left-0 top-0 bg-yellow-400 bg-opacity-50 p-2 text-white">
              <p>Ads</p>
            </div>
          </div>
          <div className="grid w-[300px] gap-1">
            <p onClick={onClick} className="cursor-pointer text-xl font-bold capitalize">
              {' '}
              {faker.commerce.productName()}{' '}
            </p>
            <p className="text-md cursor-pointer font-medium uppercase">
              {faker.company.buzzVerb()}
            </p>
            <h1 className="my-2 text-xl font-bold">₹ {faker.commerce.price()}</h1>
            <div className="flex gap-8">
              <a href="">
                <img src="/socials/telephone.svg" alt="DialKro" className="w-10" />
              </a>
              <a href="">
                <img src="/socials/whatsapp.svg" alt="DialKro" className="w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdsCardComponent
