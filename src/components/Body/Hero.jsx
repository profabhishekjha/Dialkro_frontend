import React from 'react'
import Cards from '../ui/Cards'
import AlignmentCards from '../ui/AlignmentCards'

const Hero = () => {
  return (
    <div>
      <section className="flex items-center text-black">
        <div className="container mx-auto mt-[10vh] text-center">
          <h1 className="  text-left text-4xl font-bold">Popular Categories</h1>
          <div className="my-20 flex items-center justify-center">
            <AlignmentCards images={'/Hero_pg1/Popular/transport.jpg'} prompt={'Transport'} />
            <AlignmentCards images={'/Hero_pg1/Popular/couriers.jpg'} prompt={'Couriers'} />
            <AlignmentCards images={'/Hero_pg1/Popular/hospital.jpg'} prompt={'Hospitals'} />
            <AlignmentCards images={'/Hero_pg1/Popular/hotel.jpg'} prompt={'Hotels'} />
            <AlignmentCards images={'/Hero_pg1/Popular/movers.jpg'} prompt={'Movers'} />
            <AlignmentCards images={'/Hero_pg1/Popular/rentals.jpg'} prompt={'rentals'} />
            <AlignmentCards images={'/Hero_pg1/Popular/travels.jpg'} prompt={'travels'} />
          </div>

          <h1 className="my-20 text-left text-4xl font-bold">Trending Categories</h1>
          <div className="flex items-center justify-center">
            <AlignmentCards images={'/Hero_pg1/Trending/dentist.jpg'} prompt={'Dentist'} />
            <AlignmentCards images={'/Hero_pg1/Trending/gyms.jpg'} prompt={'gyms'} />
            <AlignmentCards images={'/Hero_pg1/Trending/hostels.jpg'} prompt={'hostels'} />
            <AlignmentCards images={'/Hero_pg1/Trending/house.jpg'} prompt={'housings'} />
            <AlignmentCards
              images={'/Hero_pg1/Trending/pest-control.jpg'}
              prompt={'pest control'}
            />
            <AlignmentCards images={'/Hero_pg1/Trending/petshop.jpg'} prompt={'pet shop'} />
          </div>
          <h1 className=" my-20 text-left text-4xl font-bold">Repair Services</h1>
          <div className="flex items-center justify-center">
            <AlignmentCards images={'/Hero_pg1/Repairs/ac repairs.jpg'} prompt={'AC repair'} />
            <AlignmentCards images={'/Hero_pg1/Repairs/car care.jpg'} prompt={'Car care'} />
            <AlignmentCards
              images={'/Hero_pg1/Repairs/tv repairs.jpg'}
              prompt={'electronics services'}
            />
            <AlignmentCards
              images={'/Hero_pg1/Repairs/washing machine repairs.jpg'}
              prompt={'washing machine'}
            />
          </div>
          <h1 className=" my-10 text-left text-4xl font-bold">Wedding & Beauty</h1>
          <div className="flex gap-5">
            {/* give props to the cards and make them dynamic by giving them anchor , desc , name*/}
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/bridal-makeup.jpg'}
              heading={'Bridal Makeup'}
              description={
                ' Elevate your beauty on your special day with our talented makeup artists, who will tailor a look that reflects your unique style and radiates confidence.'
              }
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding-photography.jpg'}
              heading={'Wedding Photography'}
              description={
                ' Capture timeless moments with our expert photographers, who artfully craft visual narratives that resonate with the emotions and joy of your wedding day.'
              }
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding-venue.jpg'}
              heading={'Wedding Venues'}
              description={
                'Find the perfect backdrop for your love story among our diverse selection of venues, each designed to reflect your style and create lasting memories.'
              }
            />
            <Cards
              images={'/Hero_pg1/Wedding&Beauty/wedding.jpg'}
              heading={'Wedding Planning'}
              description={
                'Let us handle the details for a flawless celebration, from concept to execution, ensuring that every element aligns seamlessly with your dreams and desires.'
              }
            />
          </div>
        </div>
      </section>{' '}
    </div>
  )
}

export default Hero
