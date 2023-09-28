import React from 'react'
import { faker } from '@faker-js/faker'

const ProductShopDetails = () => {
  return (
    <div className=" mt-10 h-[430px] w-[380px] rounded-lg border max-lg:hidden">
      <div className="flex items-center justify-center p-6">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Address Information</h2>
          <p className="mb-3 text-lg">
            <span className="font-semibold">Address:</span>{' '}
            {`${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} - ${faker.address.zipCode()}`}
          </p>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{' '}
          <p className="mb-3 flex items-center text-lg uppercase">
            <img src="/productDetail/printer.svg" alt="" className="mr-2 w-5" />
            <span>{`GSTIN : ${faker.random.alphaNumeric(12)}`}</span>
          </p>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{' '}
          <a href="#" className="mb-3 flex items-center text-lg">
            <img src="/productDetail/mobile.svg" alt="" className="mr-2 w-5" />
            <span>Get info via SMS/Email</span>
          </a>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{' '}
          <a href="#" className="mb-3 flex items-center text-lg">
            <img src="/productDetail/share.svg" alt="" className="mr-2 w-5" />
            <span>Share this</span>
          </a>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{' '}
          <a href="#" className="mb-3 flex items-center text-lg">
            <img src="/productDetail/star.svg" alt="" className="mr-2 w-5" />
            <span>Tap to Rate</span>
          </a>
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />{' '}
          <a
            href={`https://www.${faker.internet.domainName()}/`}
            className="flex items-center text-lg">
            <img src="/productDetail/web.svg" alt="" className="mr-2 w-5" />
            <span>{`${faker.internet.domainName()}`}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductShopDetails
