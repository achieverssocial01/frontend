import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import axios from 'axios';
import { axiosClient } from '../Utils/axiosClient';


const ForgotPassword = () => {
  const [ userinput, setuserinput] = useState({
    email:"",
    password:"",
    newpassword:"",
  })

  const navigate =useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  const submitdata=async(e)=>{
e.preventDefault();
    const {email,password,newpassword}=userinput;
    if(!email || !password || !newpassword){
      return alert("enter all fields");
    }
    else if(password !== newpassword){
      return alert("Both password must be same");
    }
    else{
      try {
        const respose = await axiosClient.post("/resetpassword",{email:email,password:password});
      console.log(respose);
      if(respose.status ===200){
        navigate("/login")
      }else if(respose.status === 403){
        alert("enter correct email address");
      }

      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return (
    <>
 
 <div className='flex justify-between'>
 <div className='hidden md:block md:w-[529px] md:h-[608px] bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'>
<img src='/img/logowhite.png' className=' md:w-48 md:h-24  md:ml-6 text-white font-montserrat leading-9 font-bold'/>

<p  className='md:text-xl text-white  font-montserrat leading-8 mt-2 md:ml-6 font-bold'>Unlock a world of<br/> knowledge and possibilities!</p>

<img src='/img/sign-removebg-preview.png' className='md:w-[220px] md:h-[320px] mt-16 md:ml-20'/>

</div>

<div className='absolute z-10  md:ml-[430px]  md:rounded-l-xl md:h-[608px] bg-[#000000] md:w-[650px] text-white text-center'>
 <div className='md:ml-32 mt-24'>
<h1 className='md:text-3xl text-white font-montserrat leading-9 font-bold text-center'>Set New Password</h1>
    <p className='text-sm text-[#8B8989] mt-1 font-lato leading-5 font-medium text-center'>Create a new password to sign in</p>


<form 
 onSubmit={submitdata}

>
<input
    onChange={(e)=>setuserinput({...userinput,email:e.target.value})}
 type='email' name='email' placeholder='Enter registered email' style={{background:"none"}} className='rounded-full md:w-[500px] mt-6 border-2 text-sm md:h-12 p-3 border-[#8B8989] ' required/>


<input
 onChange={(e)=>setuserinput({...userinput,password:e.target.value})}
 type='password' name='password' placeholder='Enter New Password' style={{background:"none"}} className='rounded-full md:w-[500px] mt-6 border-2 text-sm md:h-12 p-3 border-[#8B8989] ' required/>

<div className='md:w-[500px] md:ml-2 border-2 mt-4 rounded-full flex md:h-12 p-1 border-[#8B8989] text-center  bg-[#100D0F]'>
<input
 onChange={(e)=>setuserinput({...userinput,newpassword:e.target.value})}
 type= {showPassword ? 'text' :'password'} name='password' placeholder='Enter Password Again' className='md:w-[505px] md:ml-3 focus:outline-none md:h-9 -top-7 focus:outline-none text-sm  bg-[#100D0F]' required/>

 {
  showPassword ? 
< IoIosEye onClick={()=>setShowPassword(false)} className='w-6 h-6 mr-4 mt-1 text-white'/>
:
< IoIosEyeOff onClick={()=>setShowPassword(true)} className='w-6 h-6 mr-4 mt-1 text-white'/> 

 }

</div>


<button  
type='submit'
className='w-48 md:w-[500px] py-2  mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white'>Continue</button>
</form>
</div>
 </div>
    </div>

    </>
  )
}

export default ForgotPassword
