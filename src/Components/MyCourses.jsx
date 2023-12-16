import React from 'react'

const MyCourses = () => {
  return (
    <>
      <div className='bg-[#1A1C24] absolute z-10 top-56 rounded-md w-[490px] h-96 pt-12  ml-96 text-center'>


        <div className='w-36 h-36 ml-[170px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/noCourses.png' className='w-32 mt-8 ml-3 h-20 absolute z-10'/></div>
      <h1 className='mt-5 font-montserrat text-3xl font-semibold leading-7 text-white'>No Courses Available.</h1>
      <p className='mt-2 font-lato text-base font-semibold leading-5 text-[#8B8989]'>Explore our packages and start learning today!</p>
     <a href='/exploreCourse' target='_blank'> <button className='w-[430px] h-11 ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold text-white'>Explore</button>
     </a>
      </div>
      <div className='mt-[560px]'></div>
    </>
  )
}

export default MyCourses
