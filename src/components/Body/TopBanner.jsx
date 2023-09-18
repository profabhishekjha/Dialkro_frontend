import { React, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

function TopBanner() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1692698921100-e31dc7453d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      url: 'https://images.unsplash.com/photo-1630673163701-a31ca55cb4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
        </div>
        {/* Non-Sliding Card 1 */}
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-xl font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              Explore More
            </a>
          </div>
        </div>
        {/* Non-Sliding Card 2 */}
        <div className="relative h-[36vh] w-1/5 overflow-hidden rounded-2xl object-cover">
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1694843622261-6acd040beff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")`
            }}
            className="relative h-full w-full overflow-hidden rounded-2xl bg-cover bg-center duration-500 hover:scale-[1.5]">
            <a
              href=""
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-xl font-extrabold text-white opacity-0 transition-opacity hover:opacity-100">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBanner
