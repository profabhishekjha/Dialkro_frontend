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
          <div className=" grid w-[70vw] gap-3 max-md:w-[80vw] ">
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
                {faker.commerce.productDescription().substring(0, 80)}
              </p>
              <h1 className=" text-xl font-bold">₹ {faker.commerce.price()}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-16 max-md:flex-row max-md:items-center max-md:justify-center max-md:gap-24">
            <Heart
              className="duration-500 hover:scale-125"
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

            <div className="flex flex-col gap-5 max-md:flex-row max-md:gap-10">
              {isLoggedIn ? (
                <>
                  <a
                    onClick={handlePhoneIconClick}
                    className="relative cursor-pointer duration-500 hover:scale-125">
                    <img src="/socials/telephone.svg" alt="DialKro" className="w-10" />
                    {openToggle === 'phone' && (
                      <div
                        className="absolute right-10 top-0 mt-10 w-64 rounded border border-gray-300 bg-white p-2 text-sm text-gray-500 opacity-100 shadow-md transition-opacity duration-300 max-lg:w-40 max-md:-top-28 max-md:right-6 max-md:h-20"
                        role="tooltip">
                        <div className=" rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2">
                          <h3 className="font-semibold text-gray-900">Phone Number</h3>
                        </div>
                        <div className="px-3 py-2">
                          <p>123-456-7890</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    )}
                  </a>
                  <a
                    onClick={handleWhatsAppIconClick}
                    className="relative cursor-pointer duration-500 hover:scale-125">
                    <img src="/socials/whatsapp.svg" alt="DialKro" className="w-10" />
                    {openToggle === 'whatsapp' && (
                      <div
                        className="absolute right-10 top-0 mt-10 w-64 rounded border border-gray-300 bg-white p-2 text-sm text-gray-500 opacity-100 shadow-md transition-opacity duration-300 max-md:-top-28 max-md:right-6 max-md:h-20 max-md:w-40"
                        role="tooltip">
                        <div className="flex items-center justify-center rounded-t-lg border-b border-gray-200 bg-gray-100 py-2">
                          <h3 className="font-semibold text-gray-900">WhatsApp Number</h3>
                        </div>
                        <div className="px-3 py-2">
                          <p>987-654-3210</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>
                    )}
                  </a>
                </>
              ) : (
                <p>
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
                    create
                  </span>{' '}
                  an account to access phone and WhatsApp number.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection
