import React, { useEffect, useState } from 'react';
import MenueHost from '../Menuhost';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';

const UserDashboard = () => {
    const [vans, setVans] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fechedData = JSON.parse(localStorage.getItem('allVans') || null);
        setVans(fechedData);
    }, []);

    const handleViewAll = () => {
        setShowAll(true);
    };

    return (
        <>
            <CustomNavbar />
            <MenueHost />

            <div className='bg-color-200 p-10'>
                <h1 className='text-5xl font-bold'>Welcome!</h1>
                <p className="flex justify-between">
                    <span>Income last <span className='font-semibold'>30 days</span></span>
                    <span className="text-end">Details</span>
                </p>

                <p className='text-7xl'>$2,260</p>
            </div>
            <div className='bg-color-100 ps-10 py-5'>
                <p className="flex justify-between">
                    <span className='font-semibold'>Review score <span className='font-semibold'>⭐ 5.0/5</span></span>
                    <span className="text-end me-8">Details</span>
                </p>
            </div>
            <div className="w-full me-10 p-4 rounded-lg shadow sm:p-8">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Your listed vans</h5>
                    {!showAll && (
                        <button onClick={handleViewAll} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </button>
                    )}
                </div>
                <div className="flow-root">
                    <ul role="list" className="">
                        {vans.slice(0, showAll ? vans.length : 4).map((item, index) => (
                            <li key={index} className="py-3 sm:py-4 ">
                                {console.log(item.imageUrl)}
                                <div className="flex items-center bg-white p-4 rounded-lg">
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
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        Edit
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default UserDashboard;
