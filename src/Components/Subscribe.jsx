import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {

  const [email, setSearch]= useState("")

  const navigate= useNavigate()

  const subscribers = async ()=>{
    if(!email){
      return alert('please subscribe for more updates..')
    }
    else{
    const response = await axios.post("http://localhost:8089/newsletter",{email});
    console.log(response);
    if(response.status ===200){
      navigate("/")
    }
    else{
      alert("Please subscribe!!");
    }
  }
}
  return (
    <>
      <div className='flex md:items-center justify-between mt-48 text-white'>

        <div className='ml-9'>
            <h1 className='font-montserrat md:text-3xl font-semibold leading-10 '>Subscribe<br/> to get Updates.</h1>
            <p className='font-sans text-sm font-medium text-[#8B8989] leading-5 mt-1'>Don't miss out on the latest trends and opportunities – be the<br/> first to know and take your learning journey to the next level</p>
        </div>

        <div >

            <div className='mt-12 mr-9'>
                <input type='email' name='email' placeholder='Enter Email ID' 
                 onChange={(e)=>setSearch(e.target.value)}
                className='md:w-80 h-9 rounded-full text-[#8B8989] bg-white pl-5 text-sm font-sans font-semibold'/>
                <button 
                onClick={subscribers}
                className='bg-[#4B006E] text-white font-montserrat text-sm  leading-5 ml-2 md:w-32 p-2 rounded-full'>Subscribe</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
