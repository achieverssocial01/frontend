import React,{useState} from 'react'
import { RxCross2 } from "react-icons/rx";

const Logout = ({openDialog ,setOpenDialog})=>{
    return(

        <>
        
        <div className='w-full fixed bg-[#000000ED]  opacity-[120px] h-full top-0 left-0 botton-0 right-0 m-auto '>
        <div className='bg-[#1A1C24] z-24 absolute top-48 left-0 botton-0 right-0 m-auto  -z-1 rounded w-[500px] h-[249px]'>
            <RxCross2 onClick={()=>setOpenDialog(false)} className='ml-[460px] w-8 h-8 ml-2 mt-2 text-white'/>
        <div className='w-20 h-20 ml-[195px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/logout.png' className='w-20 mt-2 ml-1 h-16 absolute z-10'/></div>
<h1 className='font-monteserrst text-white leading-6 font-semibold text-lg text-center mt-3'>Are you sure you want to logout?</h1>

<div className='flex gap-1 ml-7'>
<button onClick={()=>setOpenDialog(false)} className='w-[200px] h-9 ml-3 mt-7 text-base font-lato leading-5 rounded-full bg-[#10100F] font-semibold text-white'>No, Go Back!</button>
<button className='w-[200px] h-9 ml-3 mt-7 font-lato text-base leading-5 rounded-full bg-[#4B006E]  font-semibold text-white'>Yes, Logout!</button>
</div>
        </div>
        </div>
        

    
        </>
    )
}

export default Logout