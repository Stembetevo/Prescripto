import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio culpa praesentium fuga debitis necessitatibus temporibus, cumque quam, minima impedit quasi fugit et? Nobis numquam reprehenderit quidem ut, qui cumque.
          Laborum, rem atque consequuntur doloremque, soluta nesciunt optio quae, nisi dolorem aliquam quod libero omnis nam a ducimus sequi illo magnam velit corporis. Similique, harum id reprehenderit eligendi voluptas impedit?
          Beatae quos at dolorum! Consequuntur vitae blanditiis quos odio qui sapiente sint laudantium unde accusantium ut animi similique quas reprehenderit maiores, commodi perspiciatis enim debitis nostrum! Atque magni officia officiis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit itaque corrupti dolores, optio ipsa quibusdam aperiam. Voluptatem atque vero ad, voluptatum velit quisquam maxime adipisci. Explicabo dignissimos libero obcaecati vitae.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reiciendis, ea soluta optio dicta repellendus vero rerum maxime eveniet ipsam suscipit accusamus? Commodi nisi sint accusantium veritatis odit sunt natus!</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border pc-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300ms'>
          <b>Efficiency:</b>
          <p>Straemlied appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border pc-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300ms'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border pc-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300ms'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About