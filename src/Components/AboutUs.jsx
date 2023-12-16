import React from 'react'
import Subscribe from './Subscribe'
const AboutUs = () => {
  return (
    <>
   
      <div className='text-center  ml-12' >

        <h1 className='text-2xl mt-20 font-montserrat font-bold  text-white' >About Achievers Club</h1>
        <p className='text-base font-lato mt-5 text-[#8B8989]'>Welcome to Achievers Club, where we empower the youth to turn their aspirations<br/> into achievements. At Achievers Club, we believe in the transformative power of <br/>education and the limitless potential of every individual. Our platform is not just an<br/> educational hub; it's a gateway to opportunities and financial independence.</p>
        <button className='w-36 mt-8 rounded-full h-9 text-white font-montserrat font-semibold bg-[#4B006E]'>Get Started</button>
      </div>
 
      <div>
      <div className='w-16 absolute top-[715px] z-10 mb-32 h-16 ml-12 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] '><img src='/img/ourmission.png' className='w-12 mt-3 ml-2 h-12 '/></div>

      <div className='relative  text-white mt-64 ml-20 rounded w-[510px]  h-48 bg-[#1A1C24]'>

        <h1 className='ml-7 pt-11 text-2xl font-montserrat leading-7'>Our Mission</h1>
        <p className='font-lato text-xs leading-5 ml-7'>Our mission is to provide quality education that goes beyond traditional boundaries. We are dedicated to equipping young minds with the skills and knowledge needed to thrive in today's dynamic world. More than just a learning platform, we are a catalyst for personal and professional growth.</p>
        <img src='/img/Vector2.png' className='w-32 h-32 ml-[520px] pb-9'/> </div>
      </div>

<div className='ml-[460px]'>
  
<div className='w-16 absolute top-[1005px]  z-10 mb-32 h-16 ml-1 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] '><img src='/img/jobgeneration.png' className='w-12 mt-3 ml-2 h-12 '/></div>

<div className='relative  text-white mt-24 rounded w-[520px] ml-11 h-56 bg-[#1A1C24]'>

        <h1 className='ml-7 pt-9 text-2xl font-montserrat leading-7'>Job Generation and Youth<br/> Empowerment</h1>
        <p className='font-lato text-xs leading-5 ml-7'>At Achievers Club, we go beyond the conventional approach to<br/> education. We are committed to not only imparting knowledge but<br/> also creating real-world opportunities for the youth. Our unique model<br/> integrates education with job generation, allowing individuals to earn<br/> through affiliate marketing..</p>
        <img src='/img/vector3.png' className='w-32 h-32  right-[515px] pb-9 absolute z-20 '/> 
       
      </div>
      </div>

      
      <div>
      <div className='w-16 absolute top-[1325px] z-10 mb-24 h-16 ml-12 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] '><img src='/img/jobgenrated.png' className='w-12 mt-3 ml-2 h-12 '/></div>
      <div className='relative  text-white mt-24 rounded w-[510px] ml-20 h-48 bg-[#1A1C24]'>

<h1 className='ml-7 pt-11 text-2xl font-montserrat leading-7'>How We Generate Jobs</h1>
<p className='font-lato text-xs leading-5 ml-7'>Our innovative approach involves connecting our learners with practical avenues for income generation. Through affiliate marketing partnerships, we empower our members to monetize their skills and knowledge. This not only creates a sustainable income stream but also fosters a culture of entrepreneurship among the youth.
.</p>

</div>
      </div>

      <div className='flex justify-between mt-48 '>
     <img src='/public/img/raodmap.png' className='w-[1270px] h-80 absolute z-10'/>

        <div className='relative z-0 ml-[780px] mt-20 mb-32' >
          <h1 className='font-montserrat text-white  text-2xl leading-7'>What sets us apart?</h1 >
          <p className='font-lato text-xs text-white leading-5'>Discover a unique learning journey with diverse courses tailored to<br/> today's job market. Our hands-on programs include affiliate marketing<br/> opportunities for earning while learning. Join our thriving community<br/> for networking and collaboration, redefining your educational<br/> experience with practical skills and support for growth.</p>
        </div>
      </div>
      <Subscribe />
    </>
  )
}

export default AboutUs
