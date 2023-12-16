import React from 'react'
import { IoLogoInstagram,IoMdCall,IoLogoLinkedin,IoLogoFacebook,IoLogoYoutube   } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { CgMail,CgCopyright } from "react-icons/cg";

const Footer =()=>{
    return(
        <>
        <div className='bg-[#1A1C24] rounded hover:border-2 hover:border-blue-800 text-white h-64 mt-32 w-[1200px] ml-9 '>
      <div className='flex justify-between ml-8 '>
        <div className='mt-6'>
            <img src='https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?w=826&t=st=1701255004~exp=1701255604~hmac=82347db05b2757f6974c220b268e4a834eedbb58dc78fd91e16e6e7730f1b6a1' className='w-24 h-12 mt-2'/>
            <p className='leading-7 mt-3 font-sans font-medium text-base'>Elavate your career with Us, Your Comprehensive resource</p>
            <p className='leading-7 font-montserrat font-medium text-base'>for educational advancement. Network with leading </p>
            <p className='leading-7 font-montserrat font-medium text-base'>industry experts and ignite your drive for success.</p>
        <span className='flex mt-3 gap-1'>
     <IoLogoInstagram/>
    <IoLogoLinkedin/>
    <IoLogoFacebook />
    <IoLogoYoutube />
        </span>
        </div>
       
<div className='flex justify-evenly gap-8 mr-12 mt-7'>

        <div className=''>

            <h2 className='leading-7 font-montserrat text-lg font-semibol'>Explore</h2>
            <span className='leading-7 font-sans font-medium text-sm'>
            <p>Home</p>
            <p>About US</p>
            <p>Course Packages</p>
            <p>Blogs</p>
            <p>Contact Us</p></span>
        </div>

        <div >

            <h2 className='leading-7 font-montserrat text-lg font-semibol'>More</h2>
            <span className='leading-7 font-sans font-medium text-sm'>
            <p>Help</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Cancellation Policy</p>
          </span>
        </div>

        <div className=''>
            <h2 className='leading-7 font-montserrat text-lg font-semibol'>Get In Touch</h2>
            <div className='mt-2 leading-7 font-sans font-medium text-sm'>
 <div className='flex gap-1'><IoLocation className='mt-2'/><span>Ginger Mall,Nagpur</span></div>
 <div className='flex gap-1'>< CgMail className='mt-2 '/><span>medidek@gmail.in</span></div>
 <div className='flex gap-1'><IoMdCall className='mt-2 rounded-full w-3 h-3 bg-white text-black-800'/><span>+91 9911223344</span></div></div>
        </div>
        </div>
    
        </div>
        <hr className='w-[1150px] ml-5 mt-5'/>
        <p className='flex justify-center leading-7 font-sans font-normal text-base'>Copyright2023<CgCopyright className='mt-2'/> Medidek.in</p>
        
        </div>
        </>
    )
}
export default Footer