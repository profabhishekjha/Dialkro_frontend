import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const AgricultureEquipment = () => {
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
            images={`/b2bSubSubCategory/cultivator.webp`}
            prompt={`cultivator`}
            onClick={() => navigation('/b2b')}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/hoe.webp`}
            prompt={`hoe`}
            onClick={() => navigation('/b2b')}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/pickaxe.webp`}
            prompt={`pickaxe`}
            onClick={() => navigation('/b2b')}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/sickle.webp`}
            prompt={`sickle`}
            onClick={() => navigation('/b2b')}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/trowel.webp`}
            prompt={`trowel`}
            onClick={() => navigation('/b2b')}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AgricultureEquipment
