import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const CreateAccount = () => {
  const navigate=useNavigate()
  const[error, setError]=useState(false)
  const[userInput, setUserInput]=useState({
    name:"",
    phone:1237890,
    email:"",
    password:"",
    confirm_password:"",
    referal:""
  })

  const submitUserData =async(e)=>{
    e.preventDefault();
   const { name,phone,email,password,confirm_password,referal} =userInput;
   if(!name || !phone || !email || !password || !confirm_password){
     return alert("All feilds are required!")
   }
   else if(password !== confirm_password){
    return alert('Please enter valid password')
   }
   else{
      const responce = await axios.post('https://achieverbackend.onrender.com/register',{
        name:name, phone:phone, email:email, password:password, referal:referal
      })
      console.log(responce)
   }
  }

  console.log(userInput);
  return (
    <>
    <div className='flex justify-between -top-3'>


<div className='w-[529px] h-[610px]  bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'>
<img src='/img/logowhite.png' className=' w-32 h-20  ml-6 text-white font-montserrat leading-9 font-bold'/>

<p  className='text-xl text-white  font-montserrat leading-8 mt-2 ml-6 font-bold'>Unlock a world of<br/> knowledge and possibilities!</p>

<img src='/img/sign-removebg-preview.png' className='w-[220px] h-[320px] mt-16 ml-20'/>

</div>

<div className='absolute z-10  ml-[430px]   rounded-l-xl h-[610px] bg-[#000000] w-[650px] text-white text-center'>
 <div className='ml-32 mt-9'>
    <h1 className='font-montserrat font-bold leading-9 text-3xl'>Create Account</h1>
    <p className='text-[#8B8989] font-lato font-normal text-sm'>Enter your details to Sign In</p>

    <div className='flex gap-4 mt-7  ml-5 text-lato font-normal'>
    
        <div className='flex gap-2 rounded-full border-2 w-56 h-9 items-center border-[#FFFFFF] bg-transparent'>
        <FcGoogle className='w-7 h-6 ml-3'/>
        <h1 className='text-sm'>Sign In with Google</h1>
        </div>

        <div className='flex gap-2 rounded-full border-2 w-56 h-9 items-center border-[#FFFFFF] bg-transparent'>
        <img src='/img/facebook.png' className='w-7 h-6 ml-3 text-blue-800'/>
        <h1 className='text-sm'>Sign In with Facebook</h1>
        </div>
    </div>
<span className='flex gap-2 border-1 text-[#8B8989] ml-36 mt-4'>
    <hr className='w-20 mt-3 '/> OR <hr className='w-20 mt-3'/></span>
</div>

<form className='text-sm'>
<div className='flex gap-4 mt-5 ml-32 text-lato font-normal'>
  <input 
   onChange={(e)=>setUserInput({...userInput,phone:e.target.value})}
  type='text' name='contact' placeholder='Enter Contact Number' className='rounded-full border-2 ml-2 p-3 w-60 h-9 border-[#8B8989] bg-[#100D0F]'/>
  <input onChange={(e)=>setUserInput({...userInput,name:e.target.value})}  type='text' name='name' placeholder='Enter Full Name' className='rounded-full border-2 w-60 p-3 h-9 border-[#8B8989] bg-[#100D0F]'/>
</div>

<input onChange={(e)=>{setUserInput({...userInput,email:e.target.value})}} type='email' name='email' placeholder='Enter Email Address' className='rounded-full w-[500px] ml-32 mt-3 p-3 border-2  h-9 border-[#8B8989] bg-[#100D0F]'/>

<div className='flex gap-4 mt-3 ml-32 text-lato font-normal'>
  <input onChange={(e)=>setUserInput({...userInput,password:e.target.value})} type='text' name='password' placeholder='Enter Password' className='rounded-full border-2 ml-3 w-60 p-3 h-9 border-[#8B8989] bg-[#100D0F]'/>
  <input onChange={(e)=>setUserInput({...userInput,confirm_password:e.target.value})} type='text' name='confirm password' placeholder='Confirm Password' className='rounded-full border-2 w-60 p-3 h-9 border-[#8B8989] bg-[#100D0F]'/>
</div>

<input onChange={(e)=>setUserInput({...userInput,referal:e.target.value})} type='email' name='referal' placeholder='Enter Referral Code' className='rounded-full w-[500px] ml-32 mt-3 p-3 border-2 h-9 border-[#8B8989] bg-[#100D0F]'/>

<div className='flex gap-2 ml-36'>
<input type="radio" name="agree" value="Subject1" className='mt-5 h-4 w-4 bg-black'/>
<p className='mt-5 text-xs'>By continuing, you agree to Name’s Terms of Service & Privacy Policy</p></div>



<button onClick={submitUserData} className='w-[500px] h-9 ml-32 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white'>Continue</button>

<span className='flex text-sm gap-2 mt-2 justify-center'>
<p className='font-lato  font-normal ml-12 text-[#8E8B8B]'>Already have an account?</p>
<Link to="/login"><button className=' text-[#FF6584] text-sm'>Click Here</button></Link>
</span>
</form>
</div>



    </div>
    
    
    </>
      
    
  )
}

export default CreateAccount
