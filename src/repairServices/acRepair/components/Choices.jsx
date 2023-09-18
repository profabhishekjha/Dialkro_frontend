import React from 'react'

const Choices = () => {
  return (
    <div className="flex gap-10">
      <a href="/restaurant">
        <div className="max-auto flex h-16 w-60 items-center justify-center rounded-md border border-black shadow-lg">
          <div className="flex gap-7">
            <div className="flex h-14 flex-col items-center justify-center">
              <img src="/Rentals/bike.svg" alt="" className="mb-4 w-14" />
            </div>
            <div>
              <h3 className="text-[20px] font-bold">Book A Ride</h3>
              <p className="text-[12px] font-semibold text-gray-700">{`Make a Reservation`}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Choices
