import React from 'react'

const Checkout = () => {
  return (
    <>
      <div className=' bg-[#100E0E] rounded-md items-center ml-96 pt-3  mt-12 w-[460px] '>
      <div className='w-[430px] ml-4 rounded h-56 bg-yellow-400 pt-1'>
    
            <img src='/img/silverPckage.png' className='w-80 h-64 -top-1 ml-12'/>
           
            </div>
            <div className=''>
              <div className='flex justify-between mt-3 text-base font-bold leading-5  font-montserrat text-white'>
        <h1 className='ml-4'>Bronze Package</h1>
        <h1 className='mr-4'>₹‎ 1,899</h1>
        </div>
        <hr className='w-[430px] ml-4 mt-2 text-[#646060]'/>
        <div className='flex justify-between mt-3 text-base font-bold leading-5  font-montserrat text-white'>
        <h1 className='ml-4'>Total MRP</h1>
        <h1 className='mr-4'>₹‎ 1,899</h1>
        </div>
        <div className='flex justify-between mt-3 text-base font-bold leading-5  font-montserrat text-white'>
        <h1 className='ml-4'>GST</h1>
        <h1 className='mr-4'>₹‎ 189</h1>
        </div>
        <hr className='w-[430px] ml-4 mt-2 text-[#646060]'/>
        <h4 className='text-base font-bold ml-4 mt-4 leading-5  font-montserrat text-white'>Have a referral code?</h4>
        <div className='flex gap-2 mt-3 ml-3'>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-48 py-1 px-2 font-montserrat text-white text-xs font-medium leading-4 focus:outline-none focus:shadow-outline border-[#8B8989]" id=" Enter Password Again" name=' Enter Password Again' type="password" placeholder="7528452"/>
    <button className='bg-[#4B006E] text-white w-24 h-9 rounded-full'>Enter</button>
    </div>
   <button className='w-[430px] ml-4 mt-4 mr-2 mb-4 h-9 bg-[#4B006E] rounded-full font-lato leading-5 font-semibold text-sm text-white'>Buy Now</button>
        </div> </div> 
    </>
  )
}

export default Checkout
