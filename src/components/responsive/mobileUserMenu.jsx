import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'

const MobileUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
    setIsOpen(false) // Close the menu when opening the login modal
  }
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
    setIsOpen(false) // Close the menu when opening the login modal
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-1 p-4 text-[14px] text-[#036c93] transition hover:text-blue-300 max-md:text-[20px] md:px-2 md:py-1">
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-8 w-[20vw] overflow-hidden rounded-xl bg-white text-sm shadow-md max-md:w-[30vw] max-sm:w-[40vw]">
          <div className="flex cursor-pointer flex-col">
            <MenuItem
              label="Login"
              onClick={() => {
                setIsLoginModalOpen(true) // Open the LoginModal
              }}
            />
            <MenuItem label="Register" onClick={openRegisterModal} />
            <MenuItem label="Services" onClick={() => {}} />
            <MenuItem
              label="Add Business"
              onClick={() => {
                navigate('/addbusiness')
              }}
            />
            {/* <MenuItem label="Advertise" onClick={() => {}} /> */}
          </div>
        </div>
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
            setIsRegisterModalOpen(false) // Close the LoginModal
          }}
          onLoginClick={openLoginModal}
        />
      )}
    </div>
  )
}

export default MobileUserMenu
