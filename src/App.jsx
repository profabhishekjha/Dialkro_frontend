import { Outlet } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Hero from './components/Body/Hero'
import Footer from './components/Footer/Footer'
import Image from './components/Body/Carousel/Image'

function App() {
  return (
    <>
      <Outlet />
      <Nav />
      <Image />
      <Hero />
      <Footer />
    </>
  )
}

export default App
