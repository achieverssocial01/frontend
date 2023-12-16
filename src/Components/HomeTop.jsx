import React from 'react'
import OurOffers from './OurOffers'
const HomeTop = () =>{
    return(

        <>
        <div className='flex absolute z-10 top-32 flex-col-reverse justify-between md:flex-row sm:flex-col lg:flex-row ml-9 gap-48'>

            <div className='ml-3 mt-6'>

                <p className='text-white font-montserrat font-semibold bg-[#4B006E] text-center w-56 h-6 rounded-full leading-5 mt-24'>Innovate, Educate, Elevate</p>
                <h2 className='text-white font-montserrat font-bold leading-9 text-2xl md:3xl mt-2'>Transformative Journeys on<br/> India's Educational Frontier.</h2>
           <p className='text-[#FBFBFB] font-sans font-medium leading-6'>Join us as we redefine learning, one breakthrough at a<br/> time. Elevate your educational experience with<br/> innovation at its core.</p>

           <button className='w-32 h-8 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white'>Explore</button>
            </div>

            <div>
               <img src='/img/gr.png' className='w-[460px] h-[390px] mr-24 mt-6 rounded-md mb-8'/>
            </div>
        </div>
       <OurOffers/> 
        </>
    )
}

export default HomeTop