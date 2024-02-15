import React, { useEffect } from 'react'
import CustomNavbar from '../Navbar'
import MenueHost from '../Menuhost'
import Footer from '../Footer'
import image from '../assets/image 53.png'
import { Link, useParams } from 'react-router-dom'

const Vanone = () => {
    const userId = useParams()
    useEffect(() => {
        console.log(userId)
    }, [])
    let fetchedDetails = JSON.parse(localStorage.getItem('allVans'))

        let result = fetchedDetails.filter((data,index)=>(data.id==userId.id))
        console.log(result)



    console.log(userId)
        ;
    // console.log(id)
    return (
        <>
            <CustomNavbar />
            <MenueHost />
            <div className='md:w-3/4 ms-10'>
            {result.map((data,index)=>(
                <div key={index}>
                    <div className='md:flex gap-2'>
                        <img className='rounded w-60' src={data.imageUrl} alt="" />
                        <div className=''>
                            <button type="button" className={data.btnstyle}>{data.type}</button>
                            <br />
                            <p className='text-5xl font-semibold'>{data.name}</p>
                            <div className='text-xl'>
                                <span className='font-semibold'>${data.price}</span>
                                <span>/day</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button className='font-semibold underline'>Details</button>
                        <Link to={`/vanstwo/va2/${data.id}`}>Pricing</Link>
                        <Link to={`/vanstwo/va3/${data.id}`}>Photos</Link>
                    </div>
                    <br />
                    <p>
                        <span className='font-semibold'>Name: </span>
                        <span>{data.name}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>Category: </span>
                        <span>{data.type}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>Description: </span>
                        <span>{data.description}</span>
                    </p>
                    <br />
                    <p>
                        <span className='font-semibold'>Visibility: </span>
                        <span>Public</span>
                    </p>
                </div>
            ))}
            </div>
            <br />
                      <br />   <br />
                      <br />   <br />
                      <br />
            <Footer />
        </>
    )
}

export default Vanone