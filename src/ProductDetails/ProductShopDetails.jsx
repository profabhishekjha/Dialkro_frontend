import React from 'react'

const ProductShopDetails = () => {
  return (
    <div>
      <div className="mt-10 h-[430px] w-[380px] rounded-lg border">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="mb-6 mt-5 w-80 text-2xl font-semibold">Address</h2>
            <p className="text-lg">Bijwasan, Delhi - 110061</p>
            <hr className="mb-3 mt-3" />
            <p className="flex gap-3 text-lg">
              <img src="/productDetail/printer.svg" alt="" className="w-5" /> GSTIN :
              07AAUCA7674F1Z4
            </p>
            <hr className="mb-3 mt-3" />
            <a className="flex gap-3 text-lg">
              <img src="/productDetail/mobile.svg" alt="" className="w-4" /> Get info via SMS/Email
            </a>
            <hr className="mb-3 mt-3" />
            <a className="flex gap-3 text-lg">
              <img src="/productDetail/share.svg" alt="" className="w-6" />
              Share this
            </a>
            <hr className="mb-3 mt-3" />
            <a className="flex gap-3 text-lg">
              <img src="/productDetail/star.svg" alt="" className="w-6" /> Tap to Rate
            </a>
            <hr className="mb-3 mt-3" />
            <a className="flex gap-3 text-lg">
              <img src="/productDetail/web.svg" alt="" className="w-5" />
              Visit our website
            </a>
            <hr className="mb-3 mt-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShopDetails
