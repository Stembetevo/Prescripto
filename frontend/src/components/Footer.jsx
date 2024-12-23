import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolores natus in, ex delectus quia facere corrupti minima molestiae aperiam optio fugit facilis aut id eius. Dolorum excepturi nesciunt laborum!</p>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex-flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>


        <div>
            <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex-flex-col gap-2 text-gray-600'>
                <li>+3422222222</li>
                <li>stmbetevo.gma.coke</li>
            </ul>
        </div>

        </div>
       
        <div>
            <hr />
            <p className='py-6 text-sm font-medium'>&copy; 2020 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer