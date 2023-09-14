import React from 'react'
import Cards from '../ui/Cards'
import AlignmentCards from '../ui/AlignmentCards'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className="flex items-center text-black">
        <div className="container mx-auto mt-[10vh] text-center">
          <h1 className="  text-left text-4xl font-bold">Popular Categories</h1>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          <div className=" my-20 flex items-center justify-center">
            <AlignmentCards
              images={'/Hero_pg1/Popular/transport.webp'}
              prompt={'Transport'}
              onClick={() => {
                navigate('/transport')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/restaurant.webp'}
              prompt={'Restaurant'}
              onClick={() => {
                navigate('/restaurantcategory')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/couriers.webp'}
              prompt={'Couriers'}
              onClick={() => {
                navigate('/couriers')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/hospital.webp'}
              prompt={'Hospitals'}
              onClick={() => {
                navigate('/hospitals')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/hotel.webp'}
              prompt={'Hotels'}
              onClick={() => {
                navigate('/hotels')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/movers.webp'}
              prompt={'Packers And Movers'}
              onClick={() => {
                navigate('/movers')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Trending/house.webp'}
              prompt={'Real-Estate'}
              onClick={() => {
                navigate('/housings')
              }}
            />
          </div>

          <h1 className="my-20 text-left text-4xl font-bold">Trending Categories</h1>
          <div className="flex items-center justify-center">
            <AlignmentCards
              images={'/Hero_pg1/Trending/dentist.webp'}
              prompt={'Dentist'}
              onClick={() => {
                navigate('/dentist')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Trending/gyms.webp'}
              prompt={'gyms'}
              onClick={() => {
                navigate('/gym')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Trending/hostels.webp'}
              prompt={'hostels'}
              onClick={() => {
                navigate('/hostels')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/travels.webp'}
              prompt={'travels'}
              onClick={() => {
                navigate('/travels')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Trending/pest-control.webp'}
              prompt={'pest control'}
              onClick={() => {
                navigate('/pestControl')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Popular/rentals.webp'}
              prompt={'Rent on Hire'}
              onClick={() => {
                navigate('/rentalcategory')
              }}
            />

            <AlignmentCards
              images={'/Hero_pg1/Trending/petshop.webp'}
              prompt={'pet shop'}
              onClick={() => {
                navigate('/petshop')
              }}
            />
          </div>
          <h1 className=" my-20 text-left text-4xl font-bold">Repair Services</h1>
          <div className="flex items-center justify-center">
            <AlignmentCards
              images={'/Hero_pg1/Repairs/ac repairs.webp'}
              prompt={'AC repair'}
              onClick={() => {
                navigate('/acRepair')
              }}
            />
            <AlignmentCards
              images={'/Hero_pg1/Repairs/car care.webp'}
              prompt={'Car care'}
              onClick={() => {
                navigate('/carCare')
              }}
            />
            <AlignmentCards
              images={'/Hero_pg1/Repairs/tv repairs.webp'}
              prompt={'electronics services'}
              onClick={() => {
                navigate('/electronicServices')
              }}
            />
            <AlignmentCards
              images={'/Hero_pg1/Repairs/washing machine repairs.webp'}
              prompt={'washing machine'}
              onClick={() => {
                navigate('/washingMachine')
              }}
            />
          </div>
          <h1 className=" my-10 text-left text-4xl font-bold">Wedding & Beauty</h1>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <div className="my-20 flex   gap-5 overflow-hidden">
            {/* give props to the cards and make them dynamic by giving them anchor , desc , name*/}
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/bridal-makeup.webp'}
              heading={'Bridal Makeup'}
              description={
                ' Elevate your beauty on your special day with our talented makeup artists, who will tailor a look that reflects your unique style and radiates confidence.'
              }
              onClick={() => {
                navigate('/bridalMakeupcategory')
              }}
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding-photography.webp'}
              heading={'Wedding Photography'}
              description={
                ' Capture timeless moments with our expert photographers, who artfully craft visual narratives that resonate with the emotions and joy of your wedding day.'
              }
              onClick={() => {
                navigate('/photography')
              }}
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding-venue.webp'}
              heading={'Wedding Venues'}
              description={
                'Find the perfect backdrop for your love story among our diverse selection of venues, each designed to reflect your style and create lasting memories.'
              }
              onClick={() => {
                navigate('/weddingVenues')
              }}
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding.webp'}
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
      </section>{' '}
    </div>
  )
}

export default Hero
