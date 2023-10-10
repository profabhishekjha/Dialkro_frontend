import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../../Footer/Footer'

function ContactForm() {
  const navigate = useNavigate()

  // Define initial form data state
  const initialFormData = {
    contactPersons: [''],
    mobileNumbers: [''],
    tollFreeNumber: '',
    landlineNumber: '',
    website: '',
    email: '',
    facebook: '',
    twitter: '',
    instagram: ''
  }

  const [contactName, setcontactName]  = useState();
  const [Mob, setMob]  = useState();
  const [Tollfree,setTollfree] = useState();
  const [Landline,setLandline] = useState();
  const [Website,setWebsite] = useState();
  const [Email,setEmail] = useState();
  const [Facebook,setFacebook] = useState();
  const [Twitter,setTwitter] = useState();
  const [Insta, setInsta] = useState();

  useEffect(()=>{
    setcontactName(localStorage.getItem('fullName'));
    setMob(localStorage.getItem('mobileNumber'))
  }, [])
  


 const obj = {contactName, Mob, Tollfree, Landline, Website, Email, Facebook, Twitter, Insta}

 
  // Use state to manage form data
  const [formData, setFormData] = useState(initialFormData)

  // Handle input field changes
  // const handleInputChange = (e, index, type) => {
  //   const { name, value } = e.target
  //   const updatedData = { ...formData }

  //   if (type === 'contactPersons' || type === 'mobileNumbers') {
  //     updatedData[type][index] = value
  //   } else {
  //     updatedData[name] = value
  //   }

  //   setFormData(updatedData)
  // }

  

  // Handle adding contact person
  const addContactPerson = () => {
    const updatedData = { ...formData }
    updatedData.contactPersons.push('')
    setFormData(updatedData)
  }

  // Handle adding mobile number
  const addMobileNumber = () => {
    const updatedData = { ...formData }
    updatedData.mobileNumbers.push('')
    setFormData(updatedData)
  }

  const removeContactPerson = (index) => {
    const updatedData = { ...formData }
    updatedData.contactPersons.splice(index, 1)
    setFormData(updatedData)
  }

  // Handle removing mobile number
  const removeMobileNumber = (index) => {
    const updatedData = { ...formData }
    updatedData.mobileNumbers.splice(index, 1)
    setFormData(updatedData)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form validation if needed
    if (!formData.contactPersons || !formData.mobileNumbers) {
      alert('Please fill in all required fields.')
    } else {
      // Navigate to the next page
      navigate('/otherinfo')
    }
    // Navigate to the next page
    console.log(obj)
    localStorage.setItem('contactName', obj.contactName);
    localStorage.setItem('mobile', obj.Mob);
    localStorage.setItem('tollfree', obj.Tollfree);
    localStorage.setItem('landline', obj.Landline);
    localStorage.setItem('website', obj.Website);
    localStorage.setItem('email', obj.Email);
    localStorage.setItem('facebookUrl', obj.Facebook);
    localStorage.setItem('twitterUrl', obj.Twitter);
    localStorage.setItem('instaUrl', obj.Insta);
  }

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center">
        <form className="container mt-10 rounded-lg border p-10" onSubmit={handleSubmit}>
          <h2 className="mb-4 p-3 text-center text-3xl font-semibold">Contact Information</h2>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

          <div className="mb-2">
            <label
              htmlFor="contactPersons"
              className="mb-2 block text-sm font-medium text-gray-900">
              Contact Persons<span className="text-red-700">*</span>
            </label>
            <div id="contactPersonContainer">
              {formData.contactPersons.map((value, index) => (
                <div key={index} className="mb-2 flex">
                  <input
                    type="text"
                    name={`contactPersons[${index}]`}
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                    placeholder="Amit Grewal"
                    // value={value}
                    value={contactName}
                    // onChange={(e) => handleInputChange(e, index, 'contactPersons')}
                    onChange={e=>setcontactName(e.target.value)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeContactPerson(index)}
                      className="ml-2 rounded-lg bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600">
                      Remove
                    </button>
                  )}
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

          {/* Mobile Numbers */}
          <div className="mb-6">
            <label htmlFor="mobileNumbers" className="mb-2 block text-sm font-medium text-gray-900">
              Mobile Numbers (+91) <span className="text-red-700">*</span>
            </label>
            <div id="mobileNumbersContainer">
              {formData.mobileNumbers.map((value, index) => (
                <div key={index} className="mb-2 flex">
                  <input
                    type="text"
                    name={`mobileNumbers[${index}]`}
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                    placeholder="00-000-00-000"
                    // value={value}
                    // onChange={(e) => handleInputChange(e, index, 'mobileNumbers')}
                    value={Mob}
                    onChange={e=>setMob(localStorage.getItem('mobileNumber'))}
                    required
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeMobileNumber(index)}
                      className="ml-2 rounded-lg bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600">
                      Remove
                    </button>
                  )}
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
            <label
              htmlFor="tollFreeNumber"
              className="mb-2 block text-sm font-medium text-gray-900">
              Toll Free Number
            </label>
            <div className="mb-2">
              <input
                type="number"
                name="tollFreeNumber"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
                placeholder="(800) 623-4541"
                // value={formData.tollFreeNumber}
                // onChange={handleInputChange}
                onChange={e=>setTollfree(e.target.value)}
              />
            </div>
          </div>

          {/* Landline Number */}
          <div className="mb-6">
            <label
              htmlFor="landlineNumber"
              className="mb-2 block text-sm font-medium text-gray-900">
              Landline Number (+91)-11
            </label>
            <input
              type="number"
              name="landlineNumber"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="00-000-00"
              // value={formData.landlineNumber}
              // onChange={handleInputChange}
              onChange={e=>setLandline(e.target.value)}
            />
          </div>

          {/* Website */}
          <div className="mb-6">
            <label htmlFor="website" className="mb-2 block text-sm font-medium text-gray-900">
              Website
            </label>
            <input
              type="url"
              name="website"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="www.johndoe.com"
              // value={formData.website}
              // onChange={handleInputChange}
              onChange={e=>setWebsite(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="johndoe@gmail.com"
              // value={formData.email}
              // onChange={handleInputChange}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>

          {/* Facebook */}
          <div className="mb-6">
            <label htmlFor="facebook" className="mb-2 block text-sm font-medium text-gray-900">
              Facebook
            </label>
            <input
              type="text"
              name="facebook"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="socials"
              // value={formData.facebook}
              // onChange={handleInputChange}
              onChange={e=>setFacebook(e.target.value)}
            />
          </div>

          {/* Twitter */}
          <div className="mb-6">
            <label htmlFor="twitter" className="mb-2 block text-sm font-medium text-gray-900">
              Twitter
            </label>
            <input
              type="text"
              name="twitter"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="socials"
              // value={formData.twitter}
              // onChange={handleInputChange}
              onChange={e=>setTwitter(e.target.value)}
            />
          </div>

          {/* Instagram */}
          <div className="mb-6">
            <label htmlFor="instagram" className="mb-2 block text-sm font-medium text-gray-900">
              Instagram
            </label>
            <input
              type="text"
              name="instagram"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:placeholder-gray-400"
              placeholder="socials"
              // value={formData.instagram}
              // onChange={handleInputChange}
              onChange={e=>setInsta(e.target.value)}
            />
          </div>

          {/* Save & Continue Button */}
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

export default ContactForm
