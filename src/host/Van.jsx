import React from 'react'
import CustomNavbar from '../Navbar'
import MenueHost from '../Menuhost'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'

const Van = () => {
    const navigate = useNavigate();

    const CardsClick = (index) => {
        // navigate('/va1')
        console.log(index);
    }

    let fechedData =  JSON.parse(localStorage.getItem('allVans'))
    return (
        <>
            <CustomNavbar/>
            <MenueHost/>
            <div className="w-full me-10 p-4 rounded-lg shadow sm:p-8">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your listed vans</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y ">
                        {fechedData.map((item, index) => (
                            <Link to={`/vanstwo/va1/${item.id}`} key={index} className=" py-3 sm:py-4" onClick={() => CardsClick(index)}>
                                {console.log(item.imageUrl)}
                                <div className="flex items-center bg-white p-4 rounded-lg mt-5">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8" src={item.imageUrl} alt="Van image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {item.price} <span>/day</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Van
