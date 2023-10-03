import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const Furniture = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `/${category}Carousel/${category}1.webp`,
    `/${category}Carousel/${category}2.webp`,
    `/${category}Carousel/${category}3.webp`
  ]

  return (
    <div>
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/furniture (1).jpg`}
            prompt={`dressing table`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/furniture (2).jpg`}
            prompt={`racks`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/furniture (3).jpg`}
            prompt={`king size bed`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/furniture (4).jpg`}
            prompt={`wardrobe`}
            onClick={() => navigation('/homeservices')}
          />

          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/furniture (6).jpg`}
            prompt={`queen size bed`}
            onClick={() => navigation('/homeservices')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Furniture
