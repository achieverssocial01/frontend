import React, { useState, useRef, useEffect } from "react";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DashboardContext from "../Context/DashboardContext";
import Logout from "./Logout";

const ProfileData = ({logout}) => {
  
  const [dialog, setDialog] = useState(false);
  const menuRef=useRef();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  
  const {selectedPage, setSelectedPage} = useContext(DashboardContext)

  // useEffect (() =>{
  //     const handler =(e)=>{
  //         if(!menuRef.current.contains(e.target)){
  //           setDialog(false)
  //         }
  //     };
  //     document.addEventListener('mousedown',handler);
  //     return()=>{
  //         document.removeEventListener('mousedown',handler);
  //     };
  // },[]);
  
  
  return (
    <div className="absolute z-10 top-8 ml-[130px]">
      <img
        className="w-12 h-12 rounded-full"
        src="https://www.secpay.io/img/Pic5.png"
        alt="Rounded avatar"
        onClick={() => setDialog(!dialog)}
      />

      {dialog && (
        <div style={{boxShadow: '1px -1px 30px rgba(255, 255, 255, 0.35)'}} className="w-[147px] top-14 absolute right-3 h-[194px] bg-[#0D0D0C] text-white font-lato text-xs leading-3 rounded ">
      <div onClick={()=>{
        navigate('/dashboard')
        setSelectedPage(0)
      }}  className="flex gap-1 pl-3 pt-[14px]">
           <img src="/img/5.svg" className="h-4 w-4" />
           <span className="mt-1">Profile</span>
          </div>
          <div onClick={()=>{
            navigate('/dashboard')
            setSelectedPage(4)
            
          }} className="flex gap-1 pl-3 pt-[14px]">
            <img src="/img/2.svg" className="h-4 w-4" />
            <span className="mt-1">Certificates</span>
          </div>
        
          <div  onClick={()=>{
            navigate('/dashboard')
            setSelectedPage(1)
          }} className="flex gap-1 pl-3 pt-[14px]">
            <img src="/img/1.svg" className="h-4 w-4" />
            <span className="mt-1">Affiliate</span>
          </div>
          <div onClick={()=>{
            navigate('/dashboard')
            setSelectedPage(3)
          }} className="flex gap-1 pl-3 pt-[14px]">
            <img src="/img/3.svg" className="h-4 w-4" />
            <span className="mt-1">My Payments</span>
          </div>
          <div onClick={()=>{
            navigate('/dashboard')
            setSelectedPage(2)
          }} className="flex gap-1 pl-3 pt-[14px]">
            <img src="/img/6.svg" className="h-4 w-4" />
            <span className="mt-1">Invoice</span>
          </div>
          <div onClick={() => setOpenDialog(true)}
           className="flex gap-1 pl-3 pt-[14px] cursor-pointer">
            <img src="/img/4.svg" className="h-4 w-4" />
            <span className="mt-1">Logout</span>
          </div>
          {openDialog && <Logout setOpenDialog={setOpenDialog} />}
        </div>
      )}

{/* {selectedPage === 1 && <Dashboard/> } */}


    </div>
  );
};

export default ProfileData;
