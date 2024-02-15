import CustomNavbar from './Navbar';
import Footer from './Footer';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [newArray, setnewArray] = useState(JSON.parse(localStorage.getItem('accountDetails')) || []);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            const updatedArray = [...newArray, values]; // Create a new array with the updated values
            setnewArray(updatedArray); // Update the state with the new array
            localStorage.setItem('accountDetails', JSON.stringify(updatedArray)); // Update localStorage
            navigate('/signin');
        }
    });

    return (
        <>
            <CustomNavbar />
            <div className='h-dvh'>
                <form onSubmit={formik.handleSubmit} className='mx-auto mt-20 w-4/6 display: block;'>
                    <p className='text-4xl text-center font-semibold'>Sign in to your account</p>
                    <br />
                    <input name="firstname" type="text" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-t-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formik.values.firstname} onChange={formik.handleChange} placeholder="First name" />
                    <input name="lastname" type="text" value={formik.values.lastname} onChange={formik.handleChange} className="my-2 block w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" />
                    <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" />
                    <input name="password" type="password" value={formik.values.password} onChange={formik.handleChange} className="my-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                    <br />
                    <br />
                    <button type="submit" className="text-center w-full text-white bg-amber-600 hover:bg-amber-700 focus:ring-2 focus:ring-amber-400 font-medium rounded-lg text-sm py-2.5 me-4 mb-4 px-20 focus:outline-none dark:focus:ring-blue-800">Find your van</button>
                    <p className='text-center'>Already have an Account? <span className='text-color-100 text-xl'><Link to="/signin">Sign in</Link></span></p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
