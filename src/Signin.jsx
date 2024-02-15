import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Signin = () => {
    const navigate = useNavigate(); // Move useNavigate hook outside of useFormik

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit: (values) => {
            // Your submission logic here
            let fetchedData = JSON.parse(localStorage.getItem('accountDetails'))
            let chooseUser = fetchedData.find(user => user.email === values.email && user.password==values.password);
            console.log(chooseUser);
            if(chooseUser){
                navigate('/dashboard');
            }
            else{
                alert('Wrong Data')
            }
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
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} type="password" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" /> {/* Changed type to "password" */}
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
