import React from 'react'
import AlignmentCards from '../ui/AlignmentCards'
import { useNavigate } from 'react-router-dom'
import AlignmentCardsOther from '../ui/AlignmentCardsOther'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center">
      <section className="flex items-center text-black">
        <div className="">
          <div className="mt-[10vh] text-center">
            <h1 className="text-left text-4xl font-bold">Popular Categories</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-2 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
              <AlignmentCards
                images={'Popular/transport.webp'}
                prompt={'Transport'}
                onClick="/transport"
              />

              <AlignmentCards
                images={'Popular/restaurant.webp'}
                prompt={'Restaurant'}
                onClick="/restaurantcategory"
              />

              <AlignmentCards
                images={'Popular/astrology.webp'}
                prompt={'Astrologers'}
                onClick="/astrologer"
              />

              <AlignmentCards
                images={'Popular/hospital.webp'}
                prompt={'Hospitals'}
                onClick="/hospitalscategory"
              />

              <AlignmentCards images={'Popular/hotel.webp'} prompt={'Hotels'} onClick="/hotels" />

              <AlignmentCards
                images={'Popular/movers.webp'}
                prompt={'Packers And Movers'}
                onClick="/movers"
              />

              <AlignmentCards
                images={'Trending/house.webp'}
                prompt={'Real-Estate'}
                onClick="/realestatecategory"
              />
            </div>

            <h1 className="my-20 text-left text-4xl font-bold">Trending Categories</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-2 items-center justify-center gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
              <AlignmentCards
                images={'Trending/dentist.webp'}
                prompt={'Dentist'}
                onClick="/dentist"
              />

              <AlignmentCards images={'Trending/gyms.webp'} prompt={'gyms'} onClick="/gym" />

              <AlignmentCards
                images={'Trending/hostels.webp'}
                prompt={'hostels'}
                onClick="/hostels"
              />

              <AlignmentCards
                images={'Popular/travels.webp'}
                prompt={'travels'}
                onClick="/travels"
              />

              <AlignmentCards
                images={'Trending/pest-control.webp'}
                prompt={'pest control'}
                onClick="/pestControl"
              />

              <AlignmentCards
                images={'Popular/rentals.webp'}
                prompt={'Rent on Hire'}
                onClick="/rentalcategory"
              />

              <AlignmentCards
                images={'Trending/petshop.webp'}
                prompt={'pet shop'}
                onClick="/petshop"
              />
            </div>
            <h1 className="my-20 text-left text-4xl font-bold">Repair Services</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-2 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <AlignmentCards
                images={'Repairs/ac repairs.webp'}
                prompt={'AC repair'}
                onClick="/acRepaircategory"
              />
              <AlignmentCards
                images={'Repairs/car care.webp'}
                prompt={'Car care'}
                onClick="/carCarecategory"
              />
              <AlignmentCards
                images={'Repairs/tv repairs.webp'}
                prompt={'electronics services'}
                onClick="/electronicServicesCategory"
              />
              <AlignmentCards
                images={'Repairs/washing machine repairs.webp'}
                prompt={'washing machine'}
                onClick="/washingMachineCategory"
              />
            </div>
            <h1 className=" my-10 text-left text-4xl font-bold">Other Services</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <AlignmentCardsOther
                images={'Wedding&Beauty/bridal-makeup.webp'}
                prompt={'Wedding & Event Organiser'}
                onClick="/weddingservicescategory"
              />
              <AlignmentCardsOther
                images={'education/education.webp'}
                prompt={'Education'}
                onClick="/educationcategory"
              />
              <AlignmentCardsOther
                images={'consultant/consultant.webp'}
                prompt={'Consultant'}
                onClick="/consultantcategory"
              />
              <AlignmentCardsOther
                images={'contractor/contractor.webp'}
                prompt={'Contractor'}
                onClick="/contractorcategory"
              />
              <AlignmentCardsOther
                images={'Popular/couriers.webp'}
                prompt={'Courier'}
                onClick="/courierscategory"
              />
            </div>
          </div>
        </div>
      </section>{' '}
    </div>
  )
}

export default Hero
