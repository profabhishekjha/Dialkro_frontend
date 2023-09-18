import React from 'react'
import { faker } from '@faker-js/faker'

const ProductShopDetails = () => {
  return (
    <div>
      <div className="mt-10 h-[430px] w-[380px] rounded-lg border">
        <div className="redborder flex items-center justify-center p-3">
          <div>
            <h2 className="mb-6 mt-5 w-80 text-2xl font-semibold">Address</h2>
            <p className="overflow-hidden text-lg">{`${faker.location.buildingNumber()}, ${faker.location.city()}, ${faker.location.city()} - ${faker.location.zipCode(
              '######'
            )} `}</p>
            <hr className="mb-3 mt-3" />
            <p className="flex gap-5 text-lg uppercase">
              <img src="/productDetail/printer.svg" alt="" className="w-5" />
              {`GSTIN : ${faker.random.alphaNumeric(12)}`}
            </p>
            <hr className="mb-3 mt-3" />
            <a href="#" className="flex gap-5 text-lg">
              <img src="/productDetail/mobile.svg" alt="" className="w-4" /> Get info via SMS/Email
            </a>
            <hr className="mb-3 mt-3" />
            <a href="#" className="flex gap-5 text-lg">
              <img src="/productDetail/share.svg" alt="" className="w-6" />
              Share this
            </a>
            <hr className="mb-3 mt-3" />
            <a href="#" className="flex gap-5 text-lg">
              <img src="/productDetail/star.svg" alt="" className="w-6" /> Tap to Rate
            </a>
            <hr className="mb-3 mt-3" />
            <a href={`https://www.${faker.internet.domainName()}/`} className="flex gap-5 text-lg">
              <img src="/productDetail/web.svg" alt="" className="w-5" />
              {`${faker.internet.domainName()}`}
            </a>
            <hr className="mb-3 mt-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShopDetails
