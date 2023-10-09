import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'

const BusinessForm = () => {
  const navigate = useNavigate()

  const initialOptions = [
    'B2B',
    'AutoMobile Parts',
    'Home Services',
    'Transport',
    'Restaurant',
    'Hospitals',
    'Hotels',
    'Packers and Movers',
    'Real-Estate',
    'Dentist',
    'Gym',
    'Hostels',
    'Travels'
  ]

  const [form1data, setForm1Data] = useState({
    companyName: '',
    selectedInputs: [''],
    officeAddress: '',
    landmark: '',
    street: '',
    area: '',
    city: '',
    pincode: '',
    country: ''
  })

  const handleSelectChange = (e, index) => {
    const { value } = e.target
    const updatedInputs = [...form1data.selectedInputs]
    updatedInputs[index] = value
    setForm1Data({
      ...form1data,
      selectedInputs: updatedInputs
    })
  }

  const handleCompanyNameChange = (e) => {
    setForm1Data({
      ...form1data,
      companyName: e.target.value
    })
  }

  const handleOfficeAddressChange = (e) => {
    setForm1Data({
      ...form1data,
      officeAddress: e.target.value
    })
  }

  const handleLandMarkChange = (e) => {
    setForm1Data({
      ...form1data,
      landmark: e.target.value
    })
  }
  const handleStreetChange = (e) => {
    setForm1Data({
      ...form1data,
      street: e.target.value
    })
  }
  const handleAreaChange = (e) => {
    setForm1Data({
      ...form1data,
      area: e.target.value
    })
  }
  const handleCityChange = (e) => {
    setForm1Data({
      ...form1data,
      city: e.target.value
    })
  }
  const handlePincodeChange = (e) => {
    setForm1Data({
      ...form1data,
      pincode: e.target.value
    })
  }
  const handleCountryChange = (e) => {
    setForm1Data({
      ...form1data,
      country: e.target.value
    })
  }

  // Add similar functions for other input fields

  const handleAddMore = () => {
    setForm1Data({
      ...form1data,
      selectedInputs: [...form1data.selectedInputs, '']
    })
  }

  const handleRemove = (index) => {
    const updatedInputs = [...form1data.selectedInputs]
    updatedInputs.splice(index, 1)
    setForm1Data({
      ...form1data,
      selectedInputs: updatedInputs
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation for required fields
    if (!form1data.companyName || !form1data.selectedInputs.some((input) => input !== '')) {
      alert('Please fill in all required fields and select at least one business category.')
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
          <div className="mb-6">
            <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-900">
              Business Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              value={form1data.companyName}
              onChange={handleCompanyNameChange}
              placeholder="DialKro"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="inputSelect" className="mb-2 block text-sm font-medium text-gray-900">
              Select Your Business Categories
            </label>
            {form1data.selectedInputs.map((input, index) => (
              <div key={index} className=" mb-2 flex w-[50%]">
                <select
                  name="selectedInput"
                  value={input}
                  onChange={(e) => handleSelectChange(e, index)}
                  className="mr-2 flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400">
                  <option className="w-10" value="">
                    Select Option
                  </option>
                  {initialOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemove(index)}
                    className="rounded-lg bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600">
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMore}
              className="rounded-lg bg-green-500 px-3 py-2 font-medium text-white hover:bg-green-600">
              + Add More
            </button>
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
              value={form1data.officeAddress}
              onChange={handleOfficeAddressChange}
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
              value={form1data.landmark}
              onChange={handleLandMarkChange}
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
              value={form1data.street}
              onChange={handleStreetChange}
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
              value={form1data.area}
              onChange={handleAreaChange}
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
              value={form1data.city}
              onChange={handleCityChange}
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
              value={form1data.pincode}
              onChange={handlePincodeChange}
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
              value={form1data.country}
              onChange={handleCountryChange}
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
