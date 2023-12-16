import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import axios from 'axios';


const ForgotPassword = () => {
  const [ userinput, setuserinput] = useState({
    email:"",
    password:"",
    newpassword:"",
  })

  const navigate =useNavigate();

  const submitdata=async()=>{
    const {email,password,newpassword}=userinput;
    if(!email || !password || !newpassword){
      return alert("enter all fields");
    }
    else if(password !== newpassword){
      return alert("Both password must be same");
    }
    else{
      const respose = await axios.post("https://achieverbackend.onrender.com/resetpassword",{email:email,password:password});
      console.log(respose);
      if(respose.status ===200){
        navigate("/login")
      }
      else{
        alert("enter correct email address");
      }
    }
  }





  return (
    <>
 
 <div className='flex justify-between'>
 <div className='w-[529px] h-[608px] bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'>
<img src='/img/logowhite.png' className=' w-48 h-24  ml-6 text-white font-montserrat leading-9 font-bold'/>

<p  className='text-xl text-white  font-montserrat leading-8 mt-2 ml-6 font-bold'>Unlock a world of<br/> knowledge and possibilities!</p>

<img src='/img/sign-removebg-preview.png' className='w-[220px] h-[320px] mt-16 ml-20'/>

</div>

<div className='absolute z-10  ml-[430px]  rounded-l-xl h-[608px] bg-[#000000] w-[650px] text-white text-center'>
 <div className='ml-32 mt-24'>
<h1 className='text-3xl text-white font-montserrat leading-9 font-bold text-center'>Set New Password</h1>
    <p className='text-sm text-[#8B8989] mt-1 font-lato leading-5 font-medium text-center'>Create a new password to sign in</p>



<input
    onChange={(e)=>setuserinput({...userinput,email:e.target.value})}
 type='email' name='email' placeholder='Enter registered email' style={{background:"none"}} className='rounded-full w-[500px] mt-6 border-2 text-sm h-12 p-3 border-[#8B8989] ' required/>


<input
 onChange={(e)=>setuserinput({...userinput,password:e.target.value})}
 type='password' name='password' placeholder='Enter New Password' style={{background:"none"}} className='rounded-full w-[500px] mt-6 border-2 text-sm h-12 p-3 border-[#8B8989] ' required/>

<div className='w-[500px] ml-2 border-2 mt-4 rounded-full flex h-12 p-1 border-[#8B8989] text-center  bg-[#100D0F]'>
<input
 onChange={(e)=>setuserinput({...userinput,newpassword:e.target.value})}
 type='password' name='password' placeholder='Enter Password Again' className=' w-[505px] ml-3 rounded-full  h-9 -top-7 focus:outline-none text-sm  bg-[#100D0F]' required/>
< IoIosEye className='w-6 h-6 mr-4 mt-1 text-white'/></div>


<button  
 onClick={submitdata}
className='w-[500px] h-11  mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white'>Continue</button>

</div>
 </div>
    </div>

    </>
  )
}

export default ForgotPassword
