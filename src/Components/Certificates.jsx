import React,{useState} from 'react'
import ViewCertificate from './ViewCertificate'
import { Link } from 'react-router-dom'
import CourseCompletionCertificate from './CourseCompletionCertificate';

const Certificates = () => {
  const [changePasswordComponent, setChangePasswordComponent] = useState(false);

  return (
    <>
 { !changePasswordComponent ?<div className='bg-[#1A1C24] w-[490px] h-96 pt-9 rounded ml-56 mt-6 text-center'>
<div className='w-36 h-36 ml-[170px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/noCourses.png' className='w-32 mt-8 ml-3 h-20 absolute z-10'/></div>
<h1 className='mt-5 font-montserrat text-3xl font-semibold leading-7 text-white'>No Certificates Available.</h1>
<p className='mt-2 font-lato text-base font-semibold leading-5 text-[#8B8989]'>Explore our packages and start collecting<br/> certificates!</p>
<button onClick={()=>setChangePasswordComponent(true)} className='w-[430px] h-11 ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold font-lato text-white'>Explore</button>


</div>:<CourseCompletionCertificate setChangePasswordComponent={setChangePasswordComponent}/>}
    </>
  )
}

export default Certificates
