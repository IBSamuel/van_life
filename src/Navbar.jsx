import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const navigate = useNavigate()
  const host = ()=>{
    if(localStorage['accountDetails']){
      navigate('/dashboard')
    }
    else{
      alert('Kindly Signup')

    }
  }
  return (
    <>
      <nav className="bg-color-300 border-gray-200 dark:bg-gray-900 sticky top-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="self-center text-4xl font-black whitespace-nowrap dark:text-white">#VANLIFE</Link>
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-color-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-color-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" onClick={host} className="block py-2 px-3 text-xl text-gray-500 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Host</a>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 text-xl text-gray-500 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link to="/van" className="block py-2 px-3 text-xl text-gray-500 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vans</Link>
              </li>
              <li>
                <Link to="/signin" className="block py-2 px-3 text-xl text-gray-500 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="bi bi-person-circle"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default CustomNavbar;
