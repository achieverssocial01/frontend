import React from 'react'
import { PiHandsClapping } from "react-icons/pi";
import { SlActionRedo } from "react-icons/sl";

const SeeBlog = () => {
  return (
    <>
     <div className='w-[1200px]  ml-9 mt-24'>
      <div className=' flex justify-between text-white'>
    <div>
        <h1 className='text-3xl font-bold leading-9 font-montserrat text-white'>See What earns you<br/> the most money</h1>
        <p className='text-[#FF6584] font-lato mt-2 text-sm font-bold'>by Shashank Maraskar | 1 August 2023</p>
        </div>   

    <div className='flex gap-1 mt-12'>
    <PiHandsClapping className='mt-1'/><span className='mb-1'>20 </span><SlActionRedo className='mt-1 ml-2'/>
  
    </div> 
     </div>  

     <hr className='mt-6'/>
     <img src='/img/money.png' className='w-[1200px] h-[280px] opacity-90 brightness-100 mt-9'/>
        
        <p className='text-white mt-11 font-normal font-lato text-sm leading-6'>TikTok is full of videos demonstrating gua sha techniques, jade roller tips and facial massages that claim to promote “lymphatic drainage” — a process that reduces <br/>swelling from the lymph nodes that, according to some posts on social media, can cause facial puffiness.<br/>
For the uninitiated, gua sha is a traditional Chinese medicine technique that uses a smooth tool to scrape the skin in different parts of the body. Gua sha has been a <br/>mainstay of traditional Chinese medicine for centuries, and the idea of manually draining the lymph nodes entered Western culture in the 19th century.<br/>
But does the average person really need a DIY facial massage to “drain” their lymph nodes? Are there any risks to performing gua sha at your bathroom counter? And<br/> when should you see a doctor for a puffy face?<br/>
We asked doctors to weigh in on the facial massage trends that promise aesthetic and health benefits — plus we learned when you should seek help from a professional. <br/>Here’s what the experts had to say.</p>

<h1 className='mt-6 font-raleway text-white text-3xl'>Which courses should you buy?</h1>

<p className='text-white mt-11 font-normal font-lato text-sm leading-6'>TikTok is full of videos demonstrating gua sha techniques, jade roller tips and facial massages that claim to promote “lymphatic drainage” — a process that reduces swelling from the lymph nodes that, according to some posts on social media, can cause facial puffiness.<br/>
For the uninitiated, gua sha is a traditional Chinese medicine technique that uses a smooth tool to scrape the skin in different parts of the body. Gua sha has been a mainstay of traditional Chinese medicine for centuries, and the idea of manually draining the lymph nodes entered Western culture in the 19th century.<br/>
But does the average person really need a DIY facial massage to “drain” their lymph nodes? Are there any risks to performing gua sha at your bathroom counter? And when should you see a doctor for a puffy face?<br/>
We asked doctors to weigh in on the facial massage trends that promise aesthetic and health benefits — plus we learned when you should seek help from a professional. Here’s what the experts had to say.</p>

<hr className='mt-6'/>

<h1 className='font-montserrat text-white text-2xl leading-7 mt-9 text-center'>More Blogs</h1>

<div className='flex justify-evenly gap-9'>
<div className='mt-9'>
<img src='img/money.png' className='rounded w-64 ml-3 mt-4  h-36 scroll-ps-8 ' />
    <h3 className='text-[#207B25] text-sm ml-3 mt-5 font-bold leading-4 font-lato'>Money</h3>
    <h2 className='text-white text-sm font-bold ml-3 mt-2 leading-5 font-montserrat'>See What Earns You The Most<br/> Money</h2> 
</div>

<div className='mt-9'>
<img src='img/money.png' className='rounded w-64 ml-3 mt-4  h-36 scroll-ps-8 ' />
    <h3 className='text-[#207B25] text-sm ml-3 mt-5 font-bold leading-4 font-lato'>Money</h3>
    <h2 className='text-white text-sm font-bold ml-3 mt-2 leading-5 font-montserrat'>See What Earns You The Most<br/> Money</h2> 
</div>

<div className='mt-9'>
<img src='img/money.png' className='rounded w-64 ml-3 mt-4  h-36 scroll-ps-8 ' />
    <h3 className='text-[#207B25] text-sm ml-3 mt-5 font-bold leading-4 font-lato'>Money</h3>
    <h2 className='text-white text-sm font-bold ml-3 mt-2 leading-5 font-montserrat'>See What Earns You The Most<br/> Money</h2> 
</div>

<div className='mt-9'>
<img src='img/money.png' className='rounded w-64 ml-3 mt-4  h-36 scroll-ps-8 ' />
    <h3 className='text-[#207B25] text-sm ml-3 mt-5 font-bold leading-4 font-lato'>Money</h3>
    <h2 className='text-white text-sm font-bold ml-3 mt-2 leading-5 font-montserrat'>See What Earns You The Most<br/> Money</h2> 
</div>
</div>


<button className='w-32 h-8 mt-11 ml-[510px]  rounded-full bg-[#4B006E] font-lato leading-5 font-semibold text-sm text-white'>See All</button>
    </div> 
    </>
  )
}

export default SeeBlog
