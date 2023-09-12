import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import Image from '../../../../components/Body/Carousel/Image'
import SearchBar from '../SearchBar'
import Choices from '../Choices'

const SubCategoryPage = () => {
  return (
    <div>
      <Nav />
      <Image image="/Hero_pg1/Popular/banner.webp" customclass={'h-[40vh] w-full object-cover'} />
      <div className="mt-5 flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <Choices />
        </div>
        <div className="ml-24">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center">
          <button className="h-[40px] w-[25vw] rounded-md bg-blue-500 text-white hover:bg-blue-400">
            View All Categories
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryPage
