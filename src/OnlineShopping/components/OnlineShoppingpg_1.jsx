import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'

const OnlineShoppingpg_1 = () => {
  return (
    <>
      <Nav />
      <DropdownMenu
        prompt={'Staples'}
        image={'http://via.placeholder.com/640x360'}
        options={['Da', 'hero2']}
      />
      <DropdownMenu
        prompt={'heasro'}
        image={'http://via.placeholder.com/640x360'}
        options={['hero1', 'hero2']}
      />
      <DropdownMenu
        prompt={'heasro'}
        image={'http://via.placeholder.com/640x360'}
        options={['hero1', 'hero2']}
      />
      <DropdownMenu
        prompt={'heasro'}
        image={'http://via.placeholder.com/640x360'}
        options={['hero1', 'hero2']}
      />
      <Footer />
    </>
  )
}

export default OnlineShoppingpg_1
