import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => {
  toast.success('Submitted')
}

const BusinessListingForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    fullName: '',
    mobileNumber: '',
    companyEmail: '',
    companyURL: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData({
      ...formData,
      [name]: newValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notify() /* toaster on submit */
    console.log(formData)
  }

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center" onSubmit={() => navigate('/businessform')}>
        <form className=" container mt-48 w-5/12 rounded-lg border p-10" onSubmit={handleSubmit}>
          <div className="mb-5 text-center">
            <h1 className="text-xl font-light">
              Get your business listed for{' '}
              <span className="bg-yellow-400 px-1 font-semibold">FREE</span> on {`India's`} premier
              local search engine!
            </h1>
          </div>
          <div className="mb-6">
            <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-900">
              Company Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="DialKro"
              required
            />
          </div>
          {/* ... Existing JSX code ... */}
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1 mb-6">
              <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900">
                Title
              </label>
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400">
                <option value="">-Select-</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Others">Ms</option>
                <option value="Others">Dr.</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900">
                Full Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="mobileNumber"
                className="mb-2 block font-medium text-gray-900"
                style={{ fontSize: '14px' }}>
                Mobile Number <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="(+91) 000-000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="mb-6">
              <label
                htmlFor="companyEmail"
                className="mb-2 block text-sm font-medium text-gray-900">
                Company Email <span className="text-red-700">*</span>
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="Dialkro@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="companyURL" className="mb-2 block text-sm font-medium text-gray-900">
                Company URL <span className="text-red-700">*</span>
              </label>
              <input
                type="www"
                id="companyURL"
                name="companyURL"
                value={formData.companyURL}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="DialKro.com"
              />
            </div>
          </div>
          <div className="mb-6 flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="remember"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border border-gray-300 bg-gray-50"
              />
            </div>
            <label htmlFor="remember" className="ml-3 text-sm font-medium text-gray-400">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
            Submit
          </button>
        </form>
        <Toaster />
      </div>
      <Footer />
    </>
  )
}

export default BusinessListingForm
