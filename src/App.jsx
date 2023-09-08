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
      <Image
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        customclass={'h-[40vh] w-full object-cover'}></Image>
      <Hero />
      <Footer />
    </>
  )
}

export default App
