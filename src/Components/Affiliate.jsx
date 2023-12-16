import React from 'react'

const Affiliate = () => {
  return (
    <>
      <div className='bg-[#1A1C24] rounded-md w-[490px] h-96 pt-9 rounded ml-56 mt-6 text-center'>


        <div className='w-36 h-36 ml-[170px] rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] relative z-0'><img src='/img/affiliate.png' className='w-30 mt-6 ml-6 h-24 absolute z-10'/></div>
      <h1 className='mt-5 font-montserrat text-3xl font-semibold leading-7 text-white'>No Subscription Available.</h1>
      <p className='mt-2 font-lato text-base font-semibold leading-5 text-[#8B8989]'>Subscribe to our packages and start learning &<br/> Earning today!</p>
     <button className='w-[430px] h-11 ml-3 mt-7 text-base rounded-full bg-[#4B006E] leading-5 font-semibold text-base font-lato text-white'>Subscribe now!</button>
   
      </div>
    </>
  )
}

export default Affiliate
