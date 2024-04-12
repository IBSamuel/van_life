import React, { useEffect, useState } from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Vans = () => {
    const [vans, setVans] = useState([]);
    const [filteredVans, setFilteredVans] = useState([]);
    const [vanp, setVanp] = useState([]);

    useEffect(() => {
        axios.get('https://van-life-sever.onrender.com/api/vans')
            .then((response) => {
                setVanp(response.data);
                setVans(response.data);
                setFilteredVans(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const simple = () => {
        const details = vanp.filter((name) => name.type === 'simple');
        setFilteredVans(details);
    };

    const rugged = () => {
        const details = vanp.filter((name) => name.type === 'rugged');
        setFilteredVans(details);
    };

    const luxury = () => {
        const details = vanp.filter((name) => name.type === 'luxury');
        setFilteredVans(details);
    };

    const clearFilters = () => {
        setFilteredVans(vanp);
    };

    const storeData = (i) => {
        localStorage.setItem('allVans', JSON.stringify(vans));
    };

    return (
        <>
            <CustomNavbar />
            <div className='m-3'>
                <p className='text-4xl font-bold'>Explore our van options</p>
                <div className="flex space-x-4 font-semibold" id='filters'>
                    <button className="bg-color-200 rounded-xl px-4 py-2 text-gray-600" onClick={simple}>Simple</button>
                    <button className="bg-color-200 rounded-xl px-4 py-2 text-gray-600" onClick={luxury}>Luxury</button>
                    <button className="bg-color-200 rounded-xl px-4 py-2 text-gray-600" onClick={rugged}>Rugged</button>
                    <button className="text-black underline py-2 font-semibold" onClick={clearFilters}>Clear Filters</button>
                </div>

                <div>
                    <div className='flex flex-wrap' id='cardsDisplay'>
                        {filteredVans.map((items, index) => (
                            <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4'>
                                <div className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="" src={items.imageUrl} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span>{items.name}</span><span className='lg:ms-5 md:ms-5'>${items.price} <span className='text-xs'>/day</span></span></h5>
                                        </a>
                                        <Link to={`/vans/${items.id}`} className={items.btnstyle} onClick={storeData}>
                                            {items.type}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Vans;
