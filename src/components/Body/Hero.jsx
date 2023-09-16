import React from 'react'
import Cards from '../ui/Cards'
import AlignmentCards from '../ui/AlignmentCards'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <section className="flex items-center text-black">
        <div className="">
          <div className="mt-[10vh] text-center">
            <h1 className="text-left text-4xl font-bold">Popular Categories</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
              <AlignmentCards
                images={'Popular/transport.webp'}
                prompt={'Transport'}
                onClick={() => {
                  navigate('/transport')
                }}
              />

              <AlignmentCards
                images={'Popular/restaurant.webp'}
                prompt={'Restaurant'}
                onClick={() => {
                  navigate('/restaurantcategory')
                }}
              />

              <AlignmentCards
                images={'Popular/couriers.webp'}
                prompt={'Couriers'}
                onClick={() => {
                  navigate('/couriers')
                }}
              />

              <AlignmentCards
                images={'Popular/hospital.webp'}
                prompt={'Hospitals'}
                onClick={() => {
                  navigate('/hospitalscategory')
                }}
              />

              <AlignmentCards
                images={'Popular/hotel.webp'}
                prompt={'Hotels'}
                onClick={() => {
                  navigate('/hotels')
                }}
              />

              <AlignmentCards
                images={'Popular/movers.webp'}
                prompt={'Packers And Movers'}
                onClick={() => {
                  navigate('/movers')
                }}
              />

              <AlignmentCards
                images={'Trending/house.webp'}
                prompt={'Real-Estate'}
                onClick={() => {
                  navigate('/housings')
                }}
              />
            </div>

            <h1 className="my-20 text-left text-4xl font-bold">Trending Categories</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-1 items-center justify-center gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
              <AlignmentCards
                images={'Trending/dentist.webp'}
                prompt={'Dentist'}
                onClick={() => {
                  navigate('/dentist')
                }}
              />

              <AlignmentCards
                images={'Trending/gyms.webp'}
                prompt={'gyms'}
                onClick={() => {
                  navigate('/gym')
                }}
              />

              <AlignmentCards
                images={'Trending/hostels.webp'}
                prompt={'hostels'}
                onClick={() => {
                  navigate('/hostels')
                }}
              />

              <AlignmentCards
                images={'Popular/travels.webp'}
                prompt={'travels'}
                onClick={() => {
                  navigate('/travels')
                }}
              />

              <AlignmentCards
                images={'Trending/pest-control.webp'}
                prompt={'pest control'}
                onClick={() => {
                  navigate('/pestControl')
                }}
              />

              <AlignmentCards
                images={'Popular/rentals.webp'}
                prompt={'Rent on Hire'}
                onClick={() => {
                  navigate('/rentalcategory')
                }}
              />

              <AlignmentCards
                images={'Trending/petshop.webp'}
                prompt={'pet shop'}
                onClick={() => {
                  navigate('/petshop')
                }}
              />
            </div>
            <h1 className="my-20 text-left text-4xl font-bold">Repair Services</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <AlignmentCards
                images={'Repairs/ac repairs.webp'}
                prompt={'AC repair'}
                onClick={() => {
                  navigate('/acRepaircategory')
                }}
              />
              <AlignmentCards
                images={'Repairs/car care.webp'}
                prompt={'Car care'}
                onClick={() => {
                  navigate('/carCarecategory')
                }}
              />
              <AlignmentCards
                images={'Repairs/tv repairs.webp'}
                prompt={'electronics services'}
                onClick={() => {
                  navigate('/electronicServicesCategory')
                }}
              />
              <AlignmentCards
                images={'Repairs/washing machine repairs.webp'}
                prompt={'washing machine'}
                onClick={() => {
                  navigate('/washingMachineCategory')
                }}
              />
            </div>
            <h1 className="font-bol my-10 text-left text-4xl">Wedding & Beauty</h1>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="grid grid-cols-1 items-center justify-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* give props to the cards and make them dynamic by giving them anchor , desc , name*/}
              <Cards
                images={'Wedding&Beauty/bridal-makeup.webp'}
                heading={'Bridal Makeup'}
                description={
                  ' Elevate your beauty on your special day with our talented makeup artists, who will tailor a look that reflects your unique style and radiates confidence.'
                }
                onClick={() => {
                  navigate('/bridalMakeupcategory')
                }}
              />
              <Cards
                images={'Wedding&Beauty/wedding-photography.webp'}
                heading={'Wedding Photography'}
                description={
                  ' Capture timeless moments with our expert photographers, who artfully craft visual narratives that resonate with the emotions and joy of your wedding day.'
                }
                onClick={() => {
                  navigate('/photography')
                }}
              />
              <Cards
                images={'Wedding&Beauty/wedding-venue.webp'}
                heading={'Wedding Venues'}
                description={
                  'Find the perfect backdrop for your love story among our diverse selection of venues, each designed to reflect your style and create lasting memories.'
                }
                onClick={() => {
                  navigate('/weddingVenues')
                }}
              />
              <Cards
                images={'Wedding&Beauty/wedding.webp'}
                heading={'Wedding Planning'}
                description={
                  'Let us handle the details for a flawless celebration, from concept to execution, ensuring that every element aligns seamlessly with your dreams and desires.'
                }
                onClick={() => {
                  navigate('/weddingPlanning')
                }}
              />
            </div>
          </div>
        </div>
      </section>{' '}
    </div>
  )
}

export default Hero
