import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className=" mt-20 bg-gray-100 dark:bg-gray-700">
        <div className="x-auto w-full">
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
                <li className="mb-2">
                  <a href="https://github.com/profabhishekjha" target="_blank" rel="noreferrer">
                    Abhishek Jha
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://github.com/riturajmahapatra" target="_blank" rel="noreferrer">
                    Rituraj S Mahapatra
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://github.com/SinniS1" target="_blank" rel="noreferrer">
                    Sachin Yadav
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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/facebook.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/instagram.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <img src="/socials/twitter.svg" alt="socials" className="h-5  w-5" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
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
