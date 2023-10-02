import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const Groceries = () => {
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
            images={`/onlineshoppingSubCarousel/grocery (1).webp`}
            prompt={`tea`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (2).webp`}
            prompt={`aata`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (3).webp`}
            prompt={`buiscuit`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (4).webp`}
            prompt={`butter`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (5).webp`}
            prompt={`chips`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (6).webp`}
            prompt={`chocolate`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (7).webp`}
            prompt={`coffee`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (8).webp`}
            prompt={`cornflakes`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (9).webp`}
            prompt={`green tea`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/onlineshoppingSubCarousel/grocery (10).webp`}
            prompt={`ketchup`}
            onClick={() => navigation('/homeservices')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Groceries
