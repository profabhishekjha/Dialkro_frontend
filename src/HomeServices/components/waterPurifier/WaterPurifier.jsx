import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const WaterPurifier = () => {
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
        <div className=" grid grid-cols-3 items-center justify-center gap-16 max-sm:grid-cols-2">
          <AlignmentSubCards
            images={`/homeservice/roservice.webp`}
            prompt={`Services / Cleaning`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/rorepair.webp`}
            prompt={`Rapair`}
            onClick={() => navigation('/homeservices')}
          />
          <AlignmentSubCards
            images={`/homeservice/roinstall.webp`}
            prompt={`Installation / Uninstallation`}
            onClick={() => navigation('/homeservices')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WaterPurifier
