import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingMovies = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Genres'}
          image={'/onlineshoppingCarousel/genre.PNG'}
          options={[
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
            'Horror',
            'Science Fiction',
            'Fantasy',
            'Romance',
            'Thriller',
            'Animation',
            'Documentary',
            'Mystery',
            'Crime',
            'Family',
            'Musical',
            'War',
            'Western',
            'Biography',
            'History',
            'Sport'
          ]}
        />

        <DropdownMenu
          prompt={'Popular Movies'}
          image={'/onlineshoppingCarousel/popular.PNG'}
          options={[
            'Top Rated',
            'New Releases',
            'Box Office Hits',
            'Classic Movies',
            'Award-Winning Films',
            'Cult Favorites'
          ]}
        />

        <DropdownMenu
          prompt={'Movie Format'}
          image={'/onlineshoppingCarousel/4k.PNG'}
          options={['DVD', 'Blu-ray', '4K Ultra HD', 'Digital Download', "Collector's Editions"]}
        />

        <DropdownMenu
          prompt={'Movie Merchandise'}
          image={'/onlineshoppingCarousel/merch.PNG'}
          options={[
            'Posters',
            'T-Shirts',
            'Mugs',
            'Figurines',
            'Collectibles',
            'Movie Soundtracks'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/img.svg" alt="alt" />
      </div>

      <Footer />
    </>
  )
}

export default OnlineShoppingMovies
