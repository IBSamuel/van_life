import React, { useEffect, useState } from 'react';
import CustomNavbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';

const RentVan = () => {
    const { id } = useParams();
    const [vans, setVans] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/vans')
            .then((response) => {
                setVans(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        let vanFilter = vans.filter((student) => id == student.id);
        setInfo(vanFilter);
    }, [vans, id]);

    useEffect(() => {
        console.log("jfjfjf");
    }, []);

    useEffect(() => {
        console.log(info);
    }, [info]);

    useEffect(() => {
        if (localStorage['retailedVan']) {
            const localStorageData = JSON.parse(localStorage['retailedVan']);
        }
    }, []);

    const rentVan = () => {
        localStorage.setItem('retailedVan', JSON.stringify(info));
    };

    return (
        
        <>
        <div>
            <CustomNavbar />
            <div className='m-10 md:mb-44'>
            {info.map((student, index) => (
    <a href="#" key={index} className="flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl lg:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full md:w-48 rounded-t-lg h-96 md:h-auto lg:w-96 lg:h-96" src={student.imageUrl} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h className={student.btnstyle}>{student.type}</h>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span>{student.name}</span><span className='lg:ms-5 md:ms-5'>${student.price} <span className='text-xs'>/day</span></span></h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{student.description}</p>
            <Link to="/signin" onClick={rentVan} className="text-white bg-amber-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-amber-900">Rent this van</Link>
        </div>
    </a>
))}

            </div>
            <Footer />
            </div>
        </>
    );
};

export default RentVan;
