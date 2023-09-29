import { Link } from 'react-router-dom'

import Blob from '/Svgs/Blob.svg'
import Cart from '/Svgs/Cart.svg'

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
            <span className="text-[8vw] font-bold max-lg:text-[16vw]">{`Product not available`}</span>
          </div>
          <button className=" w-fit rounded-xl border-black bg-slate-300 px-3 py-2 text-[1.5rem]  font-semibold active:bg-purple-400">
            <Link href={'/'}>Back to Home</Link>
          </button>
        </div>
        <div className=" relative mr-20 aspect-square h-[25vw] max-lg:h-[100vw]">
          <img src={Cart} alt="Not Found Robot" style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </main>
  )
}

export default Error
