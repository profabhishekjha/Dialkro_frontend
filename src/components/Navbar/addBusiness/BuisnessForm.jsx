import React from 'react'
import { useNavigate } from 'react-router-dom'

const BusinessForm = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <form className="container mt-10 rounded-lg border p-10">
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="DialKro"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="legalName" className="mb-2 block text-sm font-medium text-gray-900">
            Legal Business Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="legalName"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="DialKro Pvt Ltd"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="Street"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900">
            City
          </label>
          <input
            type="text"
            id="city"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="India"
          />
        </div>

        <button
          type="submit"
          onClick={() => navigate('/contactinfo')}
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default BusinessForm
