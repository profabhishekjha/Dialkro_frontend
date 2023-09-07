import React from 'react'

const Nav = () => {
  return (
    <div>
      <main className="fixed z-10 w-full border-b-2 border-slate-200 bg-white shadow-sm">
        <nav className="mx-4 my-2 flex flex-col md:mx-8 md:flex-row lg:mx-16">
          <a href="">
            <img src="/logo.svg" alt="logo" className="h-12 w-24 " />
          </a>
          <div className=" flex flex-1 items-center justify-end gap-2 md:mt-0 md:gap-10">
            <ul className="flex flex-col gap-2 max-lg:hidden md:flex-row md:items-center md:gap-4">
              <button className="bg-white text-[14px] text-[#036c93] hover:bg-white hover:text-blue-300">
                SERVICES
              </button>
              <button className="bg-white text-[14px]  capitalize  text-[#036c93] hover:bg-white hover:text-blue-300">
                ADD BUSINESS
              </button>
              <button className="bg-white text-[14px]  text-[#036c93] hover:bg-white hover:text-blue-300">
                ADVERTISE
              </button>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  )
}

export default Nav
