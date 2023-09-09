import React from 'react'
import UserMenu from './UserMenu'
import MobileUserMenu from '../responsive/mobileUserMenu'
import Page from '../../productList/components/SearchBar'

const Nav = () => {
  return (
    <div>
      <main className="fixed z-10 w-full border-b-2 border-slate-200 bg-white shadow-sm">
        <nav className="mx-4 my-2 flex flex-col md:mx-8 md:flex-row lg:mx-16">
          <a href="/">
            <img src="/logo.svg" alt="logo" className="h-12 w-24 " />
          </a>
          <div className=" flex flex-1 items-center justify-end gap-2 md:mt-0 md:gap-10">
            <ul className="flex flex-col gap-10 max-lg:hidden md:flex-row md:items-center">
              <li>
                <Page />
              </li>
              <li>
                <button className="bg-white text-[14px]  capitalize  text-[#036c93] hover:bg-white hover:text-blue-300">
                  ADD BUSINESS
                </button>
              </li>
              <li>
                <button className="bg-white text-[14px]  text-[#036c93] hover:bg-white hover:text-blue-300">
                  ADVERTISE
                </button>
              </li>
              <li>
                <UserMenu />
              </li>
            </ul>
          </div>
          <div className="hidden text-3xl max-lg:block max-md:absolute max-md:bottom-5 max-md:right-4">
            <MobileUserMenu />
          </div>
        </nav>
      </main>
    </div>
  )
}

export default Nav
