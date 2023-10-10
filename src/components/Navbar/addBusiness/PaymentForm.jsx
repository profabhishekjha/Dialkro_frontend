import React, { useState } from 'react'
import ShopTimingsForm from './ShopTimingsForm'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'


const PaymentForm = () => {
  const navigate = useNavigate()

 const[googlepay, setgooglepay] = useState();
 const [phonepay, setphonepay] = useState();

 const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(googlepay, phonepay)
 }

  return (

    <>
      <Nav />

    

      <div className=" flex items-center justify-center">
        <div className='mt-20'>

<form onSubmit={handleSubmit}>
  <input onChange={(e)=>setgooglepay(e.target.value)} type="checkbox" />
  <input onChange={(e)=>setphonepay(e.target.value)} type="checkbox" />
  <button type='submit'>submit</button>
</form>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentForm
