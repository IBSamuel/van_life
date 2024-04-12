import React from 'react'
import CustomNavbar from './Navbar'
import { Link } from 'react-router-dom'

const MenueHost = () => {
  return (
    <>
    
<div className="flex ms-10">


<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <Link to="/dashboard" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</Link>
        </li>
        <li className="me-2">
            <Link to="/income" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Incomes</Link>
        </li>
        <li className="me-2">
            <Link to="/vanstwo" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Vans</Link>
        </li>
        <li>
            <Link to="/reviews" className="inline-block p-4 text-gray-400 rounded-t-lg dark:text-gray-500">Reviews</Link>
        </li>
    </ul>
</div>

</div>

    </>
  )
}

export default MenueHost