import React,{useState, useEffect, useRef} from 'react'
import { MdOutlineShare } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { RxDotFilled } from "react-icons/rx";
import Footer from './Footer';
import ReferCourse from './ReferCourse';
import OutsideClick from './OutsideClick';
import ProfileData from './ProfileData';
const ShowPackages = () => {
  
  const [passSuccess, setPassSuccess] = useState(false);
  const[open , setOpen] = useState(false)

  const menuRef=useRef();

  useEffect (() =>{
      const handler =(e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false)
          }
      };
      document.addEventListener('mousedown',handler);
      return()=>{
          document.removeEventListener('mousedown',handler);
      };
  },[]);

  return (
    <>

    <div  className='bg-[#100D0F] w-full mb-24'>

      <div ref={menuRef} className='flex justify-between '>

        <div className='flex gap-4'>
        <img
            onClick={() => navigate("/")}
            src="/img/pinklogo.png" 
            alt="logo"
            className="w-[124px] h-[25px] mt-10 ml-9"
          />
            <h1 className='text-white mt-10'> |  Bronze Package</h1>
        </div>

        <div className='flex gap-5 mt-8'>
            <div className='bg-[#1A1C24] mt-1 w-48 rounded h-9'>
                <h1 className='text-white text-xs mt-3 ml-3 '>30/50 Lectures Completed!</h1>
            </div>

<div className='w-11 h-11 border-t-[#4B006E]  border-l-[#4B006E] border-b-white rounded-[50%] border-2 border-gradient-to-b from-[#4B006E] to-[#FF6584] relative'>
<p  className='text-white absolute text-xs mt-3'>30/50</p>
</div>
    <div  onClick={() => setPassSuccess(true)} className='bg-[#4B006E] cursor-pointer flex w-48 mt-1 rounded-full h-9'>
                <MdOutlineShare className='mt-2 ml-2 text-white'/>
                <h1 className='text-white text-sm mt-2 ml-1 '>Refer This Courses</h1>
            </div>

            <div  className='mt-1 mr-9'>
    <img  className="w-10 h-10 rounded-full" src="https://www.secpay.io/img/Pic5.png" alt="Rounded avatar"/>

    </div>
        </div>
        </div>
        
<div className='flex gap-3'>
<div className=''>

        <div className='rounded bg-[#1A1C24] p-1 w-[830px] ml-9 h-[410px] mt-9'>
        <div className='pt-2 ml-3'>
        <iframe src='https://www.youtube.com/embed/cDqq354bfRo?si=8TsAuAa_K3Kr1KVw'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        width="800px"
        height="380px"
/></div>
      </div>

      <div className='p-1 w-[830px] ml-9 h-510px] rounded bg-[#1A1C24] mt-9'>

<h1 className='text-3xl font-bold leading-9 font-montserrat p-2 text-white mt-6  ml-3'>Course Overview</h1>
<p  className='text-[#FFFFFF] mt-4 font-normal font-lato text-xs leading-5 ml-3'>Overview for Bronze Package Unlock a world of opportunities with our carefully curated Bronze Course Bundle, designed to<br/>  equip you with essential skills that are indispensable in today's professional landscape. Whether you're a student looking to<br/>  bolster your resume or aseasoned professional aiming to enhance your proficiency, this comprehensive package has <br/> something for everyone. We've carefully selected courses that cover essential skills demanded by employers across industries. <br/>With hands-on training and practical insights, you'll be well-prepared for real-world challenges. Our courses are led by industry experts who bring their knowledge and experience to the virtual classroom, ensuring you receive top-notch education. We<br/> believe in making quality education accessible to all. The Bronze Course Bundle offers incredible value for your investment in <br/> personal and professional growth. Take the first step toward a brighter future with LeadsGuru.
</p>

<h4 className='text-white font-lato ml-4 mt-5 text-base leading-5 font-light '>What you'll learn </h4>

<div className='text-white font-lato ml-4 mt-1 text-sm leading-5 font-light mb-5'>
<p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Word Course </p>
<p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Excel Course </p>
<p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Powerpoint Course</p>
 <p className='flex gap-2'><RxDotFilled className='mt-1'/>Interview Mastery Course</p>
 <p className='flex gap-2'><RxDotFilled className='mt-1'/> Freelancing Mastery Course <br/>Courses Bundle Inclusion</p> <p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Word Course</p> <p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Excel Course</p> <p className='flex gap-2'><RxDotFilled className='mt-1'/>Ms Powerpoint Course </p><p className='flex gap-2'><RxDotFilled className='mt-1'/>Interview Mastery Course </p><p className='flex gap-2'><RxDotFilled className='mt-1'/>Freelancing Mastery Course</p>
</div>
</div></div>


<div className='bg-[#1A1C24] w-[480px] mt-9 ml-7 h-[550px] object-center	rounded'>
<h1 className='text-white font-montserrat font-bold text-base mt-3 ml-2'>Course Content</h1>
  <div className='ml-3 mt-4 space-y-3'>
    
  <div className='flex gap-2 bg-[#4B006E] mr-2 mb-2 h-7 mt-2'>
   <div className='rounded w-3 h-3 border-2 mt-2 border-white '></div>
    <p className='text-white font-lato text-sm mt-1'>1.Introduction</p>
  </div>

<div className='flex gap-2 mt-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>2.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>

<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>3.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>4.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>5.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>6.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>7.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>8.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>9.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>

<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>10.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>
<div className='flex gap-2'>
   <div className='rounded w-3 h-3 border-2 mt-1 border-white'></div>
    <p className='text-white font-lato text-sm'>11.How to get started</p>
  </div>
<hr className='w-64 mb-2 mt-2'/>


</div>

</div>

</div>
      </div>
      <OutsideClick onClickOutside={setOpen}>
{passSuccess && <ReferCourse setPassSuccess={setPassSuccess} />}
</OutsideClick>

    </>
  )
}

export default ShowPackages
