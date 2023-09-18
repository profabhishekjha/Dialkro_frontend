import { React, useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

function TopBanner() {
  const images = [
    {
      url: 'TopBannerCarousel/vege1.webp'
    },
    {
      url: 'TopBannerCarousel/vege2.webp'
    },
    {
      url: 'TopBannerCarousel/vege3.webp'
    },
    {
      url: 'TopBannerCarousel/grocery1.webp'
    },
    {
      url: 'TopBannerCarousel/grocery2.webp'
    },
    {
      url: 'TopBannerCarousel/grocery3.webp'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImg = () => {
    const IsFirst = currentIndex === 0
    const newIndex = IsFirst ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    console.log('clicked')
  }

  const nextImg = () => {
    const IsFirst = currentIndex === images.length - 1
    const newIndex = IsFirst ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    console.log('rightclicked')
  }
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextImg()
    }, 4000)

    // Clear the interval when the component unmounts or when currentIndex changes.
    return () => {
      clearInterval(autoplayInterval)
    }
  }, [currentIndex])

  return (
    <>
      <div className="flex items-center gap-5">
        <div className=" group relative m-auto h-[50vh] w-full object-cover px-4 py-16 ">
          <div
            style={{
              backgroundImage: `url(${images[currentIndex].url})`
            }}
            className="h-full w-full rounded-2xl bg-cover bg-center  duration-500 "></div>

          <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactLeft size={30} onClick={prevImg} />
          </div>
          <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactRight size={30} onClick={nextImg} />
          </div>
          <a
            href=""
            className="absolute hidden -translate-y-[12.3rem] translate-x-[20rem]  cursor-pointer rounded-full bg-black/20 p-2 text-4xl font-extrabold uppercase text-white group-hover:block">
            ORder Now
          </a>
        </div>
        {/* Non-Sliding Card 1 */}
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(TopBannerCarousel/b2b.webp)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              Explore More
            </a>
          </div>
        </div>
        {/* Non-Sliding Card 2 */}
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(TopBannerCarousel/home.webp)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              Explore More
            </a>
          </div>
        </div>
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(TopBannerCarousel/doctor.webp)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBanner
