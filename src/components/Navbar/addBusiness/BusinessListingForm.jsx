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
  const [form2Data, setForm2Data] = useState({
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
    setForm2Data({
      ...form2Data,
      [name]: newValue
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notify() /* toaster on submit */
    console.log(form2Data)
    localStorage.setItem('companyname', form2Data.companyName)
    localStorage.setItem('title', form2Data.title)
    localStorage.setItem('fullName', form2Data.fullName)
    localStorage.setItem('mobileNumber', form2Data.mobileNumber)
    localStorage.setItem('companyEmail', form2Data.companyEmail)
    localStorage.setItem('companyURL', form2Data.companyURL)
  }

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center" onSubmit={() => navigate('/businessform')}>
        <form
          className=" container mt-32 w-[55vw] rounded-lg border p-10 max-md:w-full"
          onSubmit={handleSubmit}>
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
              value={form2Data.companyName}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="DialKro"
              required
            />
          </div>
          {/* ... Existing JSX code ... */}
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            <div className="col-span-1 mb-6">
              <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-900">
                Title
              </label>
              <select
                id="title"
                name="title"
                value={form2Data.title}
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
                value={form2Data.fullName}
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
                value={form2Data.mobileNumber}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="(+91) 000-000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
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
                value={form2Data.companyEmail}
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
                value={form2Data.companyURL}
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
                checked={form2Data.rememberMe}
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
