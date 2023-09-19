import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactForm() {
  const navigate = useNavigate()
  const [contactPersons, setContactPersons] = useState([''])
  const [mobileNumbers, setMobileNumbers] = useState([''])
  const [tollFreeNumbers, setTollFreeNumbers] = useState([''])

  const addContactPerson = () => {
    setContactPersons([...contactPersons, ''])
  }

  const addMobileNumber = () => {
    setMobileNumbers([...mobileNumbers, ''])
  }

  const addTollFreeNumber = () => {
    setTollFreeNumbers([...tollFreeNumbers, ''])
  }

  return (
    <div className="flex items-center justify-center">
      <form className="container mt-10 rounded-lg border p-10">
        <h2 className="mb-4 p-3 text-center text-3xl font-semibold">Contact Information</h2>
        <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <div className="mb-6">
          <label htmlFor="Name" className="mb-2 block text-sm font-medium text-gray-900">
            Contact Persons<span className="text-red-700">*</span>
          </label>
          <div id="contactPersonContainer">
            {contactPersons.map((value, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                  placeholder="Amit Grewal"
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addContactPerson}
            className="mt-2 cursor-pointer text-blue-500 underline">
            Add Another Contact Person
          </button>
        </div>
        {/* ... Repeat the same pattern for mobileNumbers and tollFreeNumbers */}
        {/* Mobile Numbers */}
        <div className="mb-6">
          <label htmlFor="tel" className="mb-2 block text-sm font-medium text-gray-900">
            Mobile Numbers (+91) <span className="text-red-700">*</span>
          </label>
          <div id="mobileNumbersContainer">
            {mobileNumbers.map((value, index) => (
              <div key={index} className="mb-2">
                <input
                  type="number"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                  placeholder="00-000-00-000"
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addMobileNumber}
            className="mt-2 cursor-pointer text-blue-500 underline">
            Add Another Mobile Number
          </button>
        </div>
        {/* Toll Free Numbers */}
        <div className="mb-6">
          <label htmlFor="tel" className="mb-2 block text-sm font-medium text-gray-900">
            Toll Free Numbers<span className="text-red-700">*</span>
          </label>
          <div id="TollNumbersContainer">
            {tollFreeNumbers.map((value, index) => (
              <div key={index} className="mb-2">
                <input
                  type="number"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                  placeholder="(800) 623-4541"
                  required
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addTollFreeNumber}
            className="mt-2 cursor-pointer text-blue-500 underline">
            Add Another Toll Free Number
          </button>
        </div>

        {/* ... Remaining form fields */}
        {/* Landline No, Website, Email, Facebook, Twitter, Instagram */}
        <div className="mb-6">
          <label htmlFor="tel" className="mb-2 block text-sm font-medium text-gray-900">
            Landline No (+91)-11
          </label>
          <input
            type="number"
            id="tel"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="00-000-00"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="Website" className="mb-2 block text-sm font-medium text-gray-900">
            Website
          </label>
          <input
            type="url"
            id="url"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="www.johndoe.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="text" className="mb-2 block text-sm font-medium text-gray-900">
            Facebook
          </label>
          <input
            type="text"
            id="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="socials"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="text" className="mb-2 block text-sm font-medium text-gray-900">
            Twitter
          </label>
          <input
            type="text"
            id="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="socials"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="text" className="mb-2 block text-sm font-medium text-gray-900">
            Instagram
          </label>
          <input
            type="text"
            id="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
            placeholder="socials"
          />
        </div>
        {/* Save & Continue Button */}
        <button
          type="submit"
          onClick={() => navigate('/otherinfo')}
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default ContactForm
