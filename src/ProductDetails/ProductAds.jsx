import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import { toast } from 'react-hot-toast'
import AdsCardComponent from './AdsCardComponent'

const ProductAds = () => {
  return (
    <div>
      <AdsCardComponent />
      <AdsCardComponent />
      <AdsCardComponent />
      <AdsCardComponent />
    </div>
  )
}

export default ProductAds
