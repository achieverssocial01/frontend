import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { IoIosArrowDown } from "react-icons/io";
import { Usercontext } from '../ContextProvider';
const MobilleMenu = () => {
const location = useLocation().pathname
console.log(location);
const[select ,setSelected] = useState(0);

const navigate = useNavigate();
const { user, setuser } = useContext(Usercontext);

const logout = () => {
  localStorage.removeItem("auth");
  setuser(false);
  navigate("/login");
};

  return (
    
     <div className=' w-[70%] h-[calc(100vh-57px)] md:hidden pt-[57px] pl-[15px] mt-4  fixed z-[100] bg-gradient-to-b from-[#4B006E] to-[#FF6584] '>
     <div className=" flex flex-col gap-[30px] text-white">
          <Link to="/" className={` bg-${location === '/' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
            Home
          </Link>
          <Link to='#' className={` bg-${location === '/a' ? '[#4B006E]' : 'none' } w-fit px-6 flex text-center gap-2 py-2 rounded-[57px]`}>
            Courses Packages
            <IoIosArrowDown className="mt-1 w-5 h-5" />
          </Link>
          <Link to="/aboutus" className={` bg-${location === '/aboutus' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
            AboutUs
          </Link>
          <Link to="/contactus" className={` bg-${location === '/contactus' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
         ContactUs
          </Link>
          <Link to="/blog" className={` bg-${location === '/blog' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
          Blogs
          </Link>
         {user && <>

         <Link to="/course" className={` bg-${location === '/course' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
          My Courses
          </Link>
          <Link to="/dashboard" className={` bg-${location === '/dashboard' ? '[#4B006E]' : 'none' } w-fit px-6 py-2 rounded-[57px]`}>
          Dashboard
          </Link>
          </>
    } 
          <button onClick={logout} className='bg-[#4B006E]  w-fit px-9 py-[10px] rounded-[190px]'>Login</button>
    </div> 
    </div>
    
  )
}

export default MobilleMenu
