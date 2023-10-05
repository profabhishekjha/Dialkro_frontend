import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const IndianFood = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'North Indian'}
          image={'/onlineshoppingCarousel/north-indian-cuisine.PNG'}
          options={[
            'Paneer Dishes',
            'Biryani',
            'Butter Chicken',
            'Chole Bhature',
            'Tandoori Roti',
            'Dal Makhani',
            'Samosa',
            'Aloo Paratha',
            'Rajma',
            'Tandoori Chicken',
            'Aloo Tikki',
            'Kadai Paneer'
          ]}
        />

        <DropdownMenu
          prompt={'South Indian Cuisine'}
          image={'/onlineshoppingCarousel/south-indian-cuisine.png'}
          options={[
            'Dosa',
            'Idli',
            'Sambhar',
            'Uttapam',
            'Biryani',
            'Rasam',
            'Coconut Curry',
            'Pongal',
            'Vada',
            'Kerala Sadya',
            'Hyderabadi Biryani',
            'Andhra Curry'
          ]}
        />

        <DropdownMenu
          prompt={'Punjabi Cuisine'}
          image={'/onlineshoppingCarousel/punjabi-cuisine.png'}
          options={[
            'Paneer Tikka',
            'Chole Bhature',
            'Butter Chicken',
            'Amritsari Kulcha',
            'Sarson Da Saag',
            'Makki Di Roti',
            'Dal Makhani',
            'Tandoori Chicken',
            'Aloo Paratha',
            'Lassi',
            'Punjabi Samosa',
            'Rajma Chawal'
          ]}
        />

        <DropdownMenu
          prompt={'Rajasthani Cuisine'}
          image={'/onlineshoppingCarousel/rajasthani-cuisine.png'}
          options={[
            'Dal Baati Churma',
            'Gatte Ki Sabzi',
            'Laal Maas',
            'Mirchi Vada',
            'Ker Sangri',
            'Ghevar',
            'Mawa Kachori',
            'Rajasthani Kadhi',
            'Pyaaz Ki Kachori',
            'Rabri',
            'Methi Bajra Poori',
            'Daal Pithi'
          ]}
        />

        <DropdownMenu
          prompt={'Goan Cuisine'}
          image={'/onlineshoppingCarousel/goan-cuisine.png'}
          options={[
            'Vindaloo',
            'Fish Curry Rice',
            'Bebinca',
            'Xacuti',
            'Balchao',
            'Sorpotel',
            'Bolinho de Bacalhau',
            'Feni',
            'Bebinca',
            'Sannas',
            'Solkadhi',
            'Goan Fish Curry'
          ]}
        />
        <DropdownMenu
          prompt={'Bengali Cuisine'}
          image={'/onlineshoppingCarousel/bengali-cuisine.png'}
          options={[
            'Rasgulla',
            'Machher Jhol',
            'Shorshe Ilish',
            'Chingri Malai Curry',
            'Mishti Doi',
            'Sorshe Maach',
            'Sandesh',
            'Luchi',
            'Aloo Posto',
            'Mutton Biryani',
            'Kosha Mangsho',
            'Chomchom'
          ]}
        />

        <DropdownMenu
          prompt={'Maharashtrian Cuisine'}
          image={'/onlineshoppingCarousel/maharashtrian-cuisine.png'}
          options={[
            'Vada Pav',
            'Pav Bhaji',
            'Misal Pav',
            'Poha',
            'Bhel Puri',
            'Puran Poli',
            'Sabudana Khichdi',
            'Modak',
            'Sol Kadhi',
            'Kanda Pohe',
            'Bharli Vangi',
            'Kothimbir Vadi'
          ]}
        />

        <DropdownMenu
          prompt={'Kashmiri Cuisine'}
          image={'/onlineshoppingCarousel/kashmiri-cuisine.png'}
          options={[
            'Rogan Josh',
            'Yakhni',
            'Gushtaba',
            'Dum Aloo',
            'Kashmiri Pulao',
            'Haak Saag',
            'Nadru Monje',
            'Shufta',
            'Phirni',
            'Kahwah',
            'Girda'
          ]}
        />

        <DropdownMenu
          prompt={'Assamese Cuisine'}
          image={'/onlineshoppingCarousel/assamese-cuisine.png'}
          options={[
            'Assam Laksa',
            'Bengena Pitika',
            'Khar',
            'Masor Tenga',
            'Xutuli Pitha',
            'Assam Tea',
            'Poita Bhat',
            'Chingri Maas'
          ]}
        />

        <DropdownMenu
          prompt={'Gujarati Cuisine'}
          image={'/onlineshoppingCarousel/gujarati-cuisine.png'}
          options={[
            'Dhokla',
            'Thepla',
            'Fafda',
            'Gujarati Thali',
            'Undhiyu',
            'Gujarati Kadhi',
            'Khandvi',
            'Mohanthal',
            'Gujarati Kachumber',
            'Handvo',
            'Gujarati Dal'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default IndianFood
