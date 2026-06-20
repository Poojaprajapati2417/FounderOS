import React from 'react'
import bg from "../assets/agri-bg.webp"

const Contact = () => {
    return (

        <div className='bg-center bg-cover min-h-[60vh] bg-no-repeat md:min-h-[80vh] lg:min-h-screen relative w-full flex items-center justify-center'
            style={{ backgroundImage: `url(${bg})` }}>

            <div className="absolute inset-0 bg-black/40"></div>

            <h2 className='text-black font-2xl'>CONTACT US</h2>
            <div>

            </div>
        </div>

    )
}

export default Contact