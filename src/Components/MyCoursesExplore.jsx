import React from 'react'
import { IoSearch } from "react-icons/io5";
import SignIn from './SignIn';

const MyCoursesExplore = () => {
  return (
    <>
    
    <div className=' mt-8'>
    <div className='bg-[#1A1C24]  mb-24 flex gap-48 justify-around space-y-16 h-48'>
        <h1 className='mt-12 text-white font-montserrat text-3xl pt-3'>My Courses</h1>
        <div className='flex gap-1 w-[430px] h-11 border-2  border-[#FFFFFF] rounded-3xl'>
        <IoSearch className='text-white h-5 mt-2 ml-2 w-6'/>
        <input type='search' name='search' placeholder='Search your courses' className=' text-[#8B8989] w-96 h-7 focus:outline-none font-lato text-sm mt-1 bg-[#1A1C24]'/>
        </div>
    </div>    
   
   <div className='flex justify-evenly gap-8'>

<div className=''>
    <div className='rounded bg-[#1A1C24] p-1 w-80 h-[280px] mt-2'>
        <div className='pt-4 ml-4'>
        <iframe src='https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width="282px"
        height="180px"
/></div>
            <div className='text-white rounded ml-4'>
            <a href='/showCourse' target='_blank'> <h1 className='font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold'>Bronze Package</h1></a>
                <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
             <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "45%"}}></div></div>
             <p className='font-lato text-sm leading-4 font-medium'>45% Completed</p>
            </div>
        </div>
      </div>
   

      <div className=''>
    <div className='rounded bg-[#1A1C24] p-1 w-80 h-[280px] mt-2'>
        <div className='pt-4 ml-4'>
        <iframe src='https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width="282px"
        height="180px"
/></div>
            <div className='text-white ml-4'>
                <a href='/showCourse' target='_blank'><h1 className='font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold'>Bronze Package</h1></a>
                <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
             <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "45%"}}></div></div>
             <p className='font-lato text-sm leading-4 font-medium'>45% Completed</p>
            </div>
        </div>
      </div>

 


<div className=''>
    <div className='rounded bg-[#1A1C24] p-1 w-80 h-[280px] mt-2'>
        <div className='pt-4 ml-4'>
        <iframe src='https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width="282px"
        height="180px"
/></div>
            <div className='text-white ml-4'>
            <a href='/showCourse' target='_blank'>  <h1 className='font-montserrat mt-2 mb-2 text-xl leading-6 font-semibold'>Bronze Package</h1></a>
                <div className="w-[280px] mb-2 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
             <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "45%"}}></div></div>
             <p className='font-lato text-sm leading-4 font-medium'>45% Completed</p>
            </div>
        </div>
      </div>
    

      </div>
      </div>
</>
  )
}

export default MyCoursesExplore
