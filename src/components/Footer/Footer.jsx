import React from 'react'
import Image from '../Body/Carousel/Image'

const Footer = () => {
  return (
    <>
      <Image
        image="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80"
        customclass={'h-[50vh] w-full object-cover'}
      />
      <footer className="mt-20 bg-gray-100 dark:bg-gray-700">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Help center
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Meet the Developers
              </h2>
              <ul className="font-small text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/riturajmahapatra"
                    className="hover:underline">
                    Rituraj S Mahapatra
                  </a>
                </li>
                <li className="mb-4">
                  <a target="_blank" href="https://github.com/SinniS1" className="hover:underline">
                    Sachin Yadav
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/profabhishekjha"
                    className="hover:underline">
                    Abhishek Jha
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-200 px-4 py-6 dark:bg-gray-800 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://jansevaa.com/">Dialkro</a>. All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/facebook.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/instagram.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/twitter.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/youtube.svg" alt="socials" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
