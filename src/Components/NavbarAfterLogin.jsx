import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
const NavbarAfterLogin = () => {
  return (
    <>
      
      <div className='absolute z-10 '>
<div className='flex justify-between  text-white'> 

<div className='flex '>
<img src='/img/logowhite.png' className=' w-36 h-24  ml-4 text-white font-montserrat leading-9 font-bold'/>
   
    <div className='flex gap-5 ml-2 mt-8'>
    <div className='space-x-4 space-y-2 flex font-sans font-medium text-sm leading-5'>
        <span className='text-white text-center mt-2 font-montserrat font-semibold bg-[#4B006E] w-16 h-6 rounded-full '>Home</span>
       <a href='/ourpackages'> <span className='flex'>Courses Packages<IoIosArrowDown className='mt-1 ml-1'/></span></a>
        <Link to='/aboutUs'><span>About Us</span></Link>
       <a href='/page' target='_blank'> <span>Blogs</span></a>
       <a href='/contactus' target='_blank'> <span>Contact Us</span></a>
       <a href='/course' target='_blank'> <span>My Courses</span></a>
       <a href='/dashboard' target='_blank'> <span>Dashboard</span></a>
    </div></div></div>
    <div className='ml-[350px] mt-8'>
    <img class="w-10 h-10 rounded-full" src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" alt="Rounded avatar"/>

    </div>
</div>
</div>

</>

   
  )
}

export default NavbarAfterLogin

