import React from 'react'
import NavbarAfterLogin from './NavbarAfterLogin';
const ContactUs = () => {
  return (
    <>
<div className='relative z-0 ml-24 -top-12' >
<div className='flex justify-between relative z-0'>

<div className='w-[529px] h-[508px]  bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'>


<p  className='text-xl text-white  font-montserrat leading-8 mt-12 ml-6 font-bold'>Contact us today<br/> and be a part of Achievers!</p>

<img src='/img/support.png' className='w-[360px] h-[350px] mt-[46px] ml-9'/>

</div>

<div className='absolute z-10  ml-[430px]  rounded-l-xl h-[508px] bg-[#100D0F] w-[650px] text-white text-start '>
 <div className='ml-36 mt-12'>
    <h1 className='font-montserrat text-2xl leading-7 font-semibold mb-3'>Contact Us</h1>
    <p className='font-lato text-sm leading-4 text-[#706D6D]'>Fill the form and we’ll get back to you</p>
</div>

<form className='mt-8'>

<div className='flex gap-4 mt-3 ml-32 text-lato font-normal'>
  <input type='text' name='name' placeholder='Enter your Name' className='rounded-full font-lato text-sm leading-4 border-2 ml-3 w-60 p-3 h-9 text-[#908F8F] border-[#8B8989] bg-[#100D0F]'/>
  <input type='text' name='name' placeholder='Phone Number' className='rounded-full font-lato text-sm leading-4 border-2 w-60 p-3 h-9 text-[#908F8F] border-[#8B8989] bg-[#100D0F]'/>
</div>

<div className='flex gap-4 mt-3 ml-32 text-lato font-normal'>
  <input type='text' name='name' placeholder='Type of query' className='rounded-full font-lato text-sm leading-4 border-2 ml-3 w-60 p-3 h-9 border-[#8B8989] bg-[#100D0F]'/>
  <input type='text' name='name' placeholder='Confirm Password' className='rounded-full font-lato text-sm leading-4 border-2 w-60 p-3 h-9 text-[#908F8F] border-[#8B8989] bg-[#100D0F]'/>
</div>

<input type='text' name='mgs' placeholder='Enter your message here' className='w-[490px] font-lato text-sm leading-4 border-2 rounded text-[#908F8F] mt-4 ml-36 h-32 pb-20 pl-2 border-[#8B8989] bg-[#100D0F]'/>
<button className='w-[500px] h-9 ml-36 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white'>Send Message</button>


</form>
</div>

    </div>
    

    </div>

    </>
  )
}

export default ContactUs
