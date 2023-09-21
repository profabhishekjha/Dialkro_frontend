import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'

const BusinessForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    officeAddress: '',
    landmark: '',
    street: '',
    area: '',
    city: '',
    pincode: '',
    country: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Basic validation for required fields
    if (!formData.companyName || !formData.city || !formData.pincode) {
      alert('Please fill in all required fields.')
    } else {
      // Navigate to the next page
      navigate('/contactinfo')
    }
  }

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center">
        <form className="container mt-10 rounded-lg border p-10" onSubmit={handleSubmit}>
          <h2 className="mb-4 p-3 text-center text-3xl font-semibold">
            Enlist Your
            <span className="bg-yellow-300 px-1">Business</span>
          </h2>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          <div className="mb-6">
            <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-900">
              Business Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="DialKro"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="officeAddress" className="mb-2 block text-sm font-medium text-gray-900">
              Office Address
            </label>
            <input
              type="text"
              id="officeAddress"
              name="officeAddress"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.officeAddress}
              onChange={handleChange}
              placeholder="Office Address"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="landmark" className="mb-2 block text-sm font-medium text-gray-900">
              Landmark
            </label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="Landmark"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="street" className="mb-2 block text-sm font-medium text-gray-900">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="area" className="mb-2 block text-sm font-medium text-gray-900">
              Area
            </label>
            <input
              type="text"
              id="area"
              name="area"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="pincode" className="mb-2 block text-sm font-medium text-gray-900">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="000000"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
            Save & Continue
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default BusinessForm
