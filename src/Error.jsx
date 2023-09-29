import { Link } from 'react-router-dom'

import Blob from '/Svgs/Blob.svg'
import Cart from '/Svgs/Cart.svg'
import Arrow from '/Svgs/Arrow.svg'

const Error = () => {
  return (
    <main className=" relative mx-10 flex min-h-screen items-center justify-center  ">
      {/* Message */}
      <div className="absolute left-0 -z-10 max-lg:top-5">
        <img src={Blob} alt="Blob" style={{ objectFit: 'contain' }} />
      </div>
      <div className=" container flex  items-center justify-center max-lg:flex-wrap ">
        <div className="">
          <div className="flex flex-col">
            <span className="text-[8vw] font-bold text-[#00b4d8] max-lg:text-[16vw]">{`Product not available`}</span>
          </div>
        </div>
        <div className=" relative mr-20 aspect-square h-[25vw] max-lg:h-[100vw]">
          <Link href={'/'}>
            <img src={Cart} alt="Not Found Robot" style={{ objectFit: 'contain' }} />
            <button className=" object-fit flex items-center justify-center rounded-md bg-slate-200 p-5 uppercase hover:underline">
              <h1 className="text-xl font-semibold ">Back to home</h1>
              <img src={Arrow} alt="arrow" className="re h-8" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error
