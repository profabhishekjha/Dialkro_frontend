import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const NightStyle = () => {
  return (
    <>
      <Nav services={`Night`} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Pubs Near Me'}
          image={'/Restaurant/night life/pubs-near-me.PNG'}
          options={[
            'Pubs in City Center',
            'Pubs in Downtown',
            'Pubs in Your Neighborhood',
            'Pubs with Live Music',
            'Pubs with Outdoor Seating',
            'Pubs with Happy Hours',
            'Pubs with Karaoke Nights',
            'Pubs with Sports Screens',
            'Pubs with Rooftop Views',
            'Pubs with Craft Beer',
            'Pubs with Cocktails',
            'Pubs with Pub Grub',
            'Pubs with Dance Floors'
          ]}
        />

        <DropdownMenu
          prompt={'Clubs Near Me'}
          image={'/Restaurant/night life/clubs-near-me.PNG'}
          options={[
            'Clubs in City Center',
            'Clubs in Downtown',
            'Clubs in Your Neighborhood',
            'Clubs with Live DJ',
            'Clubs with Dance Floors',
            'VIP Clubs',
            'Lounge Clubs',
            'Rooftop Clubs',
            'Themed Clubs',
            'Late-Night Clubs'
          ]}
        />

        <DropdownMenu
          prompt={'Bars with Outdoor Seating'}
          image={'/Restaurant/night life/bars-outdoor-seating.PNG'}
          options={[
            'Bars with Patio',
            'Bars with Garden',
            'Bars with Terrace',
            'Bars with Waterfront View',
            'Bars with Courtyard',
            'Bars with Balcony'
          ]}
        />

        <DropdownMenu
          prompt={'Bars Near Me'}
          image={'/Restaurant/night life/bars-near-me.PNG'}
          options={[
            'Bars in City Center',
            'Bars in Downtown',
            'Bars in Your Neighborhood',
            'Sports Bars',
            'Cocktail Bars',
            'Whiskey Bars',
            'Wine Bars',
            'Craft Beer Bars',
            'Karaoke Bars',
            'Dive Bars',
            'Irish Pubs',
            'Tiki Bars'
          ]}
        />

        <DropdownMenu
          prompt={'Restaurants'}
          image={'/Restaurant/night life/restaurants.PNG'}
          options={[
            'Fine Dining',
            'Casual Dining',
            'Fast Food',
            'Italian Restaurants',
            'Chinese Restaurants',
            'Indian Restaurants',
            'Mexican Restaurants',
            'Seafood Restaurants',
            'Vegetarian Restaurants',
            'Family-Friendly Restaurants',
            'Late-Night Dining'
          ]}
        />

        <DropdownMenu
          prompt={'Comedy Shows'}
          image={'/Restaurant/night life/comedy-shows.PNG'}
          options={[
            'Stand-up Comedy',
            'Improv Comedy',
            'Comedy Clubs',
            'Comedy Festivals',
            'Comedy Open Mic',
            'Comedy Workshops'
          ]}
        />

        <DropdownMenu
          prompt={'Live Music'}
          image={'/Restaurant/night life/live-music.PNG'}
          options={[
            'Live Music Bars',
            'Concert Venues',
            'Music Festivals',
            'Jazz Clubs',
            'Rock & Indie Music',
            'Electronic Music',
            'Classical Music',
            'Acoustic Music',
            'Karaoke Nights'
          ]}
        />
      </div>
      <div className="my-52 flex items-center justify-center">
        <img src="/Restaurant/night life/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default NightStyle
