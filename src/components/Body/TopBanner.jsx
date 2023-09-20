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
  }

  const nextImg = () => {
    const IsFirst = currentIndex === images.length - 1
    const newIndex = IsFirst ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
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
      <div className=" mt-10 flex items-center gap-5 px-10">
        <div className=" group relative m-auto h-[50vh] w-full object-cover px-4 py-16 ">
          <div
            style={{
              backgroundImage: `url(${images[currentIndex].url})`
            }}
            className="flex h-full w-full items-center justify-center rounded-2xl bg-cover bg-center">
            <a
              href=""
              className="hidden text-4xl font-extrabold text-white duration-500 hover:scale-[1.5] group-hover:block">
              Order Now!
            </a>
          </div>

          <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactLeft size={30} onClick={prevImg} />
          </div>
          <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactRight size={30} onClick={nextImg} />
          </div>
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
              className="absolute inset-0 flex items-center  justify-center bg-black bg-opacity-40 text-center text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              <p className="grid">
                Explore <span>More</span>
              </p>
            </a>
          </div>
        </div>
        {/* Non-Sliding Card 2 */}
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(TopBannerCarousel/automobile.webp)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href="/autocare"
              className="absolute inset-0 flex w-full items-center justify-center bg-black bg-opacity-40 text-center text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              <p className="grid">
                AutoMobile <span>Parts</span>
              </p>
            </a>
          </div>
        </div>
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(TopBannerCarousel/home.webp)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-center text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              <p className="grid">
                Explore <span>More</span>
              </p>
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
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-center text-lg font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              <p className="grid">
                Explore <span>More</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBanner
