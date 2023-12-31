import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import DropdownMenu from '../../../OnlineShopping/components/DropdownComponent'

const IndianFood = () => {
  return (
    <>
      <Nav services={'Indian'} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'North Indian'}
          image={'/Restaurant/indian foods/north-indian.PNG'}
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
          image={'/Restaurant/indian foods/south-indian-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/punjabi-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/rajasthani-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/goan-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/bengali-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/maharashtrian-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/kashmiri-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/assamese-cuisine.PNG'}
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
          image={'/Restaurant/indian foods/gujarati-cuisine.PNG'}
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
      <div className="my-28 flex items-center justify-center">
        <img src="/Restaurant/indian foods/frames/Frame 12.svg" alt="alt" className="mt-20" />
      </div>

      <Footer />
    </>
  )
}

export default IndianFood
