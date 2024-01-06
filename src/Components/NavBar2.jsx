import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "./ContextProvider";
import ProfileData from "./ProfileData";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import MobilleMenu from "./Navbars/MobilleMenu";

const NavBar2 = () => {
  const { user, setuser } = useContext(Usercontext);
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(0);
  const logout = () => {
    localStorage.removeItem("auth");
    setuser(false);
    navigate("/login");
  };

  const [menu, setMenu] = useState(false);

  return (
    <>
    
    <nav className="flex justify-between text-white items-center   md:p-10">
      <div className="flex items-center gap-4 hidden md:flex">
        <img
          onClick={() => navigate("/")}
          src="/img/pinklogo.png"
          alt="logo"
          className="w-[134px] h-[25px]"
        />
        <div className=" gap-7 text-white lg:flex ">
          <Link to="/" className="">
            Home
          </Link>
          <Link className="flex gap-1 block">
            Courses Packages
            <IoIosArrowDown className="mt-1 w-5 h-5" />
          </Link>
        </div>

        {user ? (
          <>
            <Link
              to="/aboutUs"
              className="rounded-full hover:bg-[#4B006E] cursor-pointer px-4 "
              onClick={() => setSelectedPage(0)}
              style={{ background: selectedPage === 2 ? "#4B006E" : "none" }}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="rounded-full hover:bg-[#4B006E] cursor-pointer px-4 "
              onClick={() => setSelectedPage(0)}
              style={{ background: selectedPage === 3 ? "#4B006E" : "none" }}
            >
              Blogs
            </Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/course">My Courses</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        ) : (
          <>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/page">Blogs</Link>
            <Link to="/contactus">Contact Us</Link>
          </>
        )}

        {user ? (
          <div className="mr-12">
            <ProfileData logout={logout} />
          </div>
        ) : (
          <div className="mr-12">
            <Link to="/signup">
              <button className="hidden sm:hidden  md:hidden lg:flex rounded-full px-10 py-2 text-white font-montserrat font-semibold bg-[#4B006E]">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>

   
        <div className="flex justify-between items-center relative p-4 w-full md:hidden">
          <img
            onClick={() => navigate("/")}
            src="/img/pinklogo.png" 
            alt="logo"
            className="w-[134px] h-[25px]"
          />
        { !menu ? <CgMenuRightAlt onClick={()=>setMenu(!menu)}/> : <RxCross2 onClick={()=>{setMenu(!menu)}}/>}
        </div>
  
    </nav>
    {menu && <MobilleMenu/> }
    </>


  );
};

export default NavBar2;
