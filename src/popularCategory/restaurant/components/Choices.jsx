import React from 'react'

const Choices = () => {
  return (
    <div className="flex gap-10 max-lg:flex-col">
      <a href="/restaurant">
        <div className="max-auto flex h-16 w-72 items-center justify-center rounded-md border border-black shadow-lg">
          <div className="flex gap-7">
            <div className="flex h-14 flex-col items-center justify-center">
              <img src="/Restaurant/booking.svg" alt="" className="w-16" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold">Book A Table</h3>
              <p className="text-[12px] font-semibold text-gray-700">{`Make a Reservation`}</p>
            </div>
          </div>
        </div>
      </a>

      <a href="/restaurant" className="hover:bg-gray-100">
        <div className="max-auto flex h-16 w-72 items-center justify-center rounded-md border border-black shadow-lg">
          <div className="flex gap-10">
            <div className="flex h-14 flex-col items-center justify-center">
              <img src="/Restaurant/trending.svg" alt="" className="w-10" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold">{`WHAT'S TRENDING?`}</h3>
              <p className="text-[12px] font-semibold text-gray-700">{`Try it Yourself`}</p>
            </div>
          </div>
        </div>
      </a>

      <a href="/restaurant">
        <div className="max-auto flex h-16 w-72 items-center justify-center rounded-md border border-black shadow-lg">
          <div className="flex gap-10">
            <div className=" flex h-14 flex-col items-center justify-center">
              <img src="/Restaurant/order.svg" alt="" className="w-12" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold">{`ORDER FOOD`}</h3>
              <p className="text-[12px] font-semibold text-gray-700">{`6000 Restaurants`}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Choices
