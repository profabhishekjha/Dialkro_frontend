import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const EngineParts = () => {
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
            images={`/b2bSubSubCategory/camshaft.webp`}
            prompt={`camshaft`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/crankshaft.webp`}
            prompt={`crankshaft`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/engine block.webp`}
            prompt={`cylinder`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/piston.webp`}
            prompt={`piston`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/valve.webp`}
            prompt={`valves`}
            onClick={'/b2b'}
          />
          <AlignmentSubCards
            images={`/b2bSubSubCategory/spares.webp`}
            prompt={`spare parts`}
            onClick={'/b2b'}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EngineParts
