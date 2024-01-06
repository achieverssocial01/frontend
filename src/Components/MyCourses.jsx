import React from 'react'
import { Link } from 'react-router-dom'

const MyCourses = () => {
  return (
    <>
      <div className='bg-[#1A1C24] absolute  -left-80 top-56 sm:w-[390px] rounded-md md:w-[490px] md:h-96 pt-12  md:ml-[512px] text-center'>


        <div className='md:w-36 md:h-36  md:ml-[170px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/noCourses.png' className='w-32 mt-8 md:ml-3 h-20 absolute z-10'/></div>
      <h1 className='mt-5 font-montserrat text-3xl font-semibold leading-7 text-white'>No Courses Available.</h1>
      <p className='mt-2 font-lato text-base font-semibold leading-5 text-[#8B8989]'>Explore our packages and start learning today!</p>
     <Link to='/exploreCourse'> <button className='md:w-[430px] md:h-11 md:ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold text-white'>Explore</button>
     </Link>
     
      </div>
      <div className='md:mt-[560px]'></div>
    </>
  )
}

export default MyCourses
