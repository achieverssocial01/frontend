import React from 'react'

const Subscribe = () => {
  return (
    <>
      <div className='flex justify-between mt-48 text-white'>

        <div className='ml-9'>
            <h1 className='font-montserrat text-3xl font-semibold leading-10 '>Subscribe<br/> to get Updates.</h1>
            <p className='font-sans text-sm font-medium text-[#8B8989] leading-5 mt-1'>Don't miss out on the latest trends and opportunities – be the<br/> first to know and take your learning journey to the next level</p>
        </div>

        <div>

            <div className='mt-12 mr-9'>
                <input type='email' name='email' placeholder='Enter Email ID' className='w-80 h-9 rounded-full text-[#8B8989] bg-white pl-5 text-sm font-sans font-semibold'/>
                <button className='bg-[#4B006E] text-white font-montserrat text-sm  leading-5 ml-2 w-32 p-2 rounded-full'>Subscribe</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
