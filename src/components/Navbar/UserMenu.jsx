import React, { useCallback, useEffect, useState, useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem'
import Avatar from '../Avatar'
import LoginModal from '../modals/LoginModal'
import RegisterModal from '../modals/RegisterModal'

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  const dropdownRef = useRef(null)
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const handleClickOutside = useCallback(
    (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    },
    [dropdownRef]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, handleClickOutside])

  // State to manage the modal's open/close state

  // Function to open the modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  // Function to close the modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }
  // Function to open the modal
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true)
  }

  // Function to close the modal
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          flex
          cursor-pointer
          flex-row
          items-center 
          gap-3 
          rounded-full 
          border-[1px] 
          border-neutral-200 
          p-4 
          transition 
          hover:shadow-md 
          md:px-2 
          md:py-1
          ">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute 
          right-0 
          top-10
          w-[10vw]
          overflow-hidden 
          rounded-xl 
          bg-white 
          text-sm 
          shadow-md 
          ">
          <div className="flex cursor-pointer flex-col">
            <>
              {/* Pass the openModal function as a callback */}
              <MenuItem
                label="Login"
                onClick={() => {
                  openLoginModal() // Call this function to open the modal
                }}
              />
              <MenuItem
                label="Sign up"
                onClick={() => {
                  openRegisterModal()
                }}
              />
            </>
          </div>
        </div>
      )}
      {/* Pass closeModal as a prop to the Modal component */}
      {isLoginModalOpen && (
        <LoginModal onClose={closeLoginModal} onRegisterClick={openRegisterModal} />
      )}
      {isRegisterModalOpen && (
        <RegisterModal onClose={closeRegisterModal} onLoginClick={openLoginModal} />
      )}
    </div>
  )
}

export default UserMenu
