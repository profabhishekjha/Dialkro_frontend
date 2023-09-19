import React from 'react'
import ShopTimingsForm from './ShopTimingsForm'
import { useNavigate } from 'react-router-dom'
const PaymentForm = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <form className="container mt-10 rounded-lg border p-10">
        <h2 className="mb-4 p-3 text-center text-3xl font-semibold">Other Information</h2>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <ShopTimingsForm />
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <h2 className="mb-4 p-3 text-center text-2xl font-semibold">
          <span className="bg-yellow-300 px-1">Select Payment Gateways</span> Accepted by you
        </h2>

        <div className="flex items-center justify-center gap-12">
          <div className="space-y-4">
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="googlepay"
              />
              <span className="text-lg ">Google Pay</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="phonepe"
              />
              <span className="text-lg">PhonePe</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="bhim"
              />
              <span className="text-lg ">BHIM App</span>
            </label>
          </div>
          <div className="space-y-4">
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="mobikwik"
              />
              <span className="text-lg">MobiKwik</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="uber"
              />
              <span className="text-lg ">Uber Pay</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="chillr"
              />
              <span className="text-lg">Chillr</span>
            </label>
          </div>
          <div className="space-y-4">
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="paytmpaymentsbank"
              />
              <span className="text-lg ">Paytm Payments Bank</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="sbipay"
              />
              <span className="text-lg ">SBI Pay</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="imobile"
              />
              <span className="text-lg">iMobile</span>
            </label>
          </div>
          <div className="space-y-4">
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="axispay"
              />
              <span className="text-lg ">Axis Pay</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="bobupi"
              />
              <span className="text-lg">Bank of Baroda (BOB) UPI</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="amazonpay"
              />
              <span className="text-lg ">Amazon Pay</span>
            </label>
          </div>
          <div className="space-y-4">
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="freecharge"
              />
              <span className="text-lg">Freecharge</span>
            </label>

            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="cred"
              />
              <span className="text-lg ">Cred</span>
            </label>
            <label className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded-md border text-blue-500"
                name="cred"
              />
              <span className="text-lg ">Cash on Delivery</span>
            </label>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            onClick={() => navigate('/thankyou')}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
