import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const PestControl = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  return (
    <div>
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AlignmentSubCards
            images={`/homeservice/cockroach.webp`}
            prompt={`Cockroach & Ants`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/termites.webp`}
            prompt={`Termites`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/bedbugs.webp`}
            prompt={`Bed Bugs`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/mosquitos.webp`}
            prompt={`Mosquitos`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/lizards.webp`}
            prompt={`Rodents / Lizards`}
            onClick={() => navigation('/homeservices')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PestControl
