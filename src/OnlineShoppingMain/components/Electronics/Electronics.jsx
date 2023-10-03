import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const Electronics = () => {
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
            images={`/onlineshoppingSubCarousel/electronics (1).webp`}
            prompt={`phone stand`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (2).webp`}
            prompt={`phone case`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (3).webp`}
            prompt={` tough case`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (4).webp`}
            prompt={`hp laptops`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (5).webp`}
            prompt={`macbooks`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (6).webp`}
            prompt={`msi laptops`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (7).webp`}
            prompt={`oneplus phones`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (8).webp`}
            prompt={`redmi phones`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (9).webp`}
            prompt={`iphones`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/electronics (10).webp`}
            prompt={`nothing phones`}
            onClick={() => navigation('/homeservices')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Electronics
