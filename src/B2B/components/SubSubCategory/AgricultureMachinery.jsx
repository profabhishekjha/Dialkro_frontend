import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const AgricultureMachinery = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" flex items-center justify-center gap-5 max-lg:flex-wrap ">
          <AlignmentSubCards
            images={`/b2bSubSubCategory/harvester.webp`}
            prompt={`harvester`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/plough.webp`}
            prompt={`plough`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/rotavator.webp`}
            prompt={`rotavator`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/tractor cultivator.webp`}
            prompt={`tractor cultivator`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/tractor.webp`}
            prompt={`tractor`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/trailer-wagon.webp`}
            prompt={`trailer wagon`}
            onClick={'/b2b'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AgricultureMachinery
