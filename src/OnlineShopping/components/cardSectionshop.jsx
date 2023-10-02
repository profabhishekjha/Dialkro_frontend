/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { faker } from '@faker-js/faker'
import { Heart } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../../components/modals/LoginModal' // Adjust the path as needed
import RegisterModal from '../../components/modals/RegisterModal' // Adjust the path as needed

const CardSection = ({ onClick }) => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false) // State to control the toggle menu
  const [phoneNumber, setPhoneNumber] = useState('+1234567890')
  const [value] = React.useState(3)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [openToggle, setOpenToggle] = useState(null)
  const navigate = useNavigate()

  if (isLoggedIn === 'access') {
    setIsLoggedIn(true)
  }

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
  }

  const toggleMenu = (menu) => {
    if (openToggle === menu) {
      setOpenToggle(null) // Close the toggle menu if it's already open
    } else {
      setOpenToggle(menu) // Open the toggle menu
    }
  }

  const handlePhoneIconClick = () => {
    toggleMenu('phone')
  }

  const handleWhatsAppIconClick = () => {
    toggleMenu('whatsapp')
  }

  const handleOrderNowClick = () => {
    navigate('/checkoutpage')
  }

  return (
    <div>
      <div className="container relative flex w-[90vw] rounded-lg border-2 max-md:flex-col">
        <div className=" relative flex w-[90vw] gap-5 p-5 max-md:flex-col">
          <div className=" h-60 overflow-hidden bg-white shadow-lg">
            <img
              className="h-60 w-full cursor-pointer rounded-lg object-cover"
              onClick={onClick}
              src={faker.image.url()}
              alt="Card Image"
            />
          </div>
          <div className=" grid w-[70vw] gap-5 max-md:w-[80vw] ">
            <div className="">
              <p onClick={onClick} className="cursor-pointer text-xl font-bold capitalize">
                {' '}
                {faker.commerce.productName()}{' '}
              </p>
              <Rating name="read-only" value={value} readOnly />
              <p className="cursor-pointer text-lg font-bold uppercase">
                {faker.company.buzzVerb()}
              </p>
              <p className=" w-3/4 max-md:h-[7vh] max-md:w-[78vw]">
                {faker.commerce.productDescription().substring(0, 75)}
              </p>
              <h1 className=" text-xl font-bold">₹ {faker.commerce.price()}</h1>
            </div>

            {/* ... (other JSX code) */}
            {isLoggedIn ? (
              <button
                onClick={handleOrderNowClick}
                className="group relative mb-2 mr-2 inline-flex h-10 w-28 items-center justify-center overflow-hidden rounded-lg border border-black bg-gradient-to-b from-blue-500 to-teal-400 font-semibold text-white hover:bg-black">
                {' '}
                Order Now!
              </button>
            ) : (
              <p className="w-80">
                <button className="group relative mb-2 mr-2 inline-flex h-10 w-24 items-center justify-center overflow-hidden rounded-lg border border-black bg-gradient-to-b from-blue-500 to-teal-400 font-semibold text-white hover:bg-black">
                  {' '}
                  Order Now!
                </button>
                Please{' '}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    setIsLoginModalOpen(true) // Open the LoginModal
                  }}>
                  login
                </span>{' '}
                or{` `}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    setIsRegisterModalOpen(true) // Open the RegisterModal
                  }}>
                  signup
                </span>{' '}
                to order.
              </p>
            )}
            {isLoginModalOpen && (
              <LoginModal
                onClose={() => {
                  setIsLoginModalOpen(false) // Close the LoginModal
                }}
                onRegisterClick={openRegisterModal}
              />
            )}
            {isRegisterModalOpen && (
              <RegisterModal
                onClose={() => {
                  setIsRegisterModalOpen(false) // Close the RegisterModal
                }}
                onLoginClick={() => {
                  setIsLoginModalOpen(true) // Open the LoginModal
                }}
              />
            )}
            {/* ... (other JSX code) */}
          </div>
          <div className="flex h-12 flex-col max-md:flex-row max-md:items-center max-md:justify-center ">
            <Heart
              className=" h-10  duration-500 hover:scale-125 max-lg:absolute max-lg:right-10"
              color={`${isFavorite ? 'red' : 'black'}`}
              fill={`${isFavorite ? 'red' : 'white'}`}
              onClick={() => {
                setIsFavorite(!isFavorite)
                if (!isFavorite) {
                  toast.success('Added to Favorites')
                } else {
                  toast.error('Removed from Favourites')
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection
