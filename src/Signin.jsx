import React, { useState } from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            axios.post('https://van-life-sever.onrender.com/check', values)
                .then((response) => {
                    console.log(response.data);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    if (error.response) {
                        // The request was made and the server responded with a status code that falls out of the range of 2xx
                        console.error(error.response.data); // Log the error response from the server
                        setError(error.response.data.message); // Set the error message in state
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.error(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error('Error', error.message);
                    }
                });
        }
    });

    return (
        <>
            <CustomNavbar />
            <form className='h-dvh' onSubmit={formik.handleSubmit}>
                <div className='mx-auto mt-20 w-4/6 display: block;'>
                    <p className='text-4xl text-center font-semibold'>Sign in to your account</p>
                    <br />
                    <input name='email' value={formik.values.email} onChange={formik.handleChange} type="text" className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" />
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} type="password" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                    <p className='error'>{error}</p> {/* Display the error message */}
                    <br />
                    <br />
                    <button type="submit" className="w-full text-white bg-amber-600  hover:bg-amber-700 focus:ring-2 focus:ring-amber-400 font-medium rounded-lg  text-sm  py-2.5 me-4 mb-4 px-20  focus:outline-none dark:focus:ring-blue-800">Sign In</button>
                    <p className='text-center'>Don’t have an account? <Link to="/signup" className='text-color-100 text-xl'>Create one now</Link></p>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Signin;
