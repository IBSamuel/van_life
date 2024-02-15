import React, { useEffect } from 'react'
import CustomNavbar from '../Navbar'
import MenueHost from '../Menuhost'
import Footer from '../Footer'
import image from '../assets/image 53.png'
import { Link, useParams } from 'react-router-dom'

const Vantwo = () => {
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
                        <Link to={`/vanstwo/va1/${data.id}`}>Details</Link>
                        <Link to={`/vanstwo/va2/${data.id}`} className='font-semibold underline'>Pricing</Link>
                        <Link to={`/vanstwo/va3/${data.id}`}>Photos</Link>
                    </div>
                    <br />
                    <div>
                    <p>
                      <span className='text-5xl'>${data.price}/day</span>
                      <br />
                      <br />
                    </p>

                    </div>
                    
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

export default Vantwo