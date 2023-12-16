import React from 'react'
import { PiStudentBold } from "react-icons/pi";

const OurOffers = () =>{
    return(
        <>
        <div className='bg-[#1A1C24] w-[1220px]  rounded h-[612px] mt-[465px] text-center ml-6 text-white'>
            <div mt-3>
            <div className=' p-3'>
                <h1 className='font-monteserrat text-3xl leading-10 text-center mt-4 '>What we Offer</h1>
                <p className='font-sans text-[#8B8989] leading-6 text-center text-bas mt-1'>Tailored Programs and Dynamic Initiatives to</p>
                <p className='font-sans text-[#8B8989] leading-6 text-center text-base'> Shape Tomorrow’s Leaders</p>
            </div></div>

            <div>

                <div className='flex gap-4 mt-9'>
                    
                    <div className='w-[280px] h-[331.44px] rounded-md ml-6 bg-gradient-to-b from-[#4B006E] to-[#FF6584]'>
                        <div>
                        <img src='/img/trainers.png' className='absolute ml-[106px] mb-5 w-[81px] h-[81px] mt-4 z-10'/>
                    <div className='bg-[#EE5C82] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9'></div>
                   </div>
                    <div>
                        <h1 className='font-monteserrat text-base font-semibold leading-7 mt-9'>1.2 Lakh+ Students</h1>
                        <p className='text-white font-sans font-medium leading-5 text-sm mt-2'>At the heart of our mission are the 1.2 <br/>
                        lakh students who have chosen to<br/>
                         embark on their educational journey with us. </p>
                    </div></div>

                    <div className='w-[280px] h-[331.44px] bg-[#100D0F] '>
                    <div>
                        <img src='/img/students.png' className='absolute ml-[106px] mb-5 w-[78px] h-[76px] mt-3 z-10'/>
                    <div className='bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9'></div>
                   </div>
                    <div>
                        <h1 className='font-monteserrat text-base font-semibold leading-7 mt-9 '>1.2 Lakh+ Students</h1>
                        <p className='text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2'>At the heart of our mission are the 1.2 <br/>
                        lakh students who have chosen to<br/>
                         embark on their educational journey with us. </p>
                    </div></div>

                    <div className='w-[280px] h-[331.44px] rounded-md bg-[#100D0F]'>
                    <div>
                        <img src='/img/training.png' className='absolute ml-[106px] mb-5 w-[78px] h-[81px] mt-3 z-10'/>
                    <div className='bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9'></div>
                   </div>
                    <div>
                        <h1 className='font-monteserrat text-base mt-9 font-semibold leading-7'>1.2 Lakh+ Students</h1>
                        <p className='text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2'>At the heart of our mission are the 1.2 <br/>
                        lakh students who have chosen to<br/>
                         embark on their educational journey with us. </p>
                    </div></div>

                    <div className='w-[280px] h-[331.44px] rounded-md bg-[#100D0F]'>
                    <div>
                        <img src='/img/earning.png' className='absolute ml-[106px] mb-5 w-[76px] h-[81px] mt-3 z-10'/>
                    <div className='bg-[#4B006E] relative z-0 w-24 h-24 rounded-full  ml-24 mt-9'></div>
                   </div>
                    <div>
                        <h1 className='font-monteserrat text-base font-semibold leading-7 mt-9'>1.2 Lakh+ Students</h1>
                        <p className='text-[#908F8F] font-sans font-medium leading-5 text-sm mt-2'>At the heart of our mission are the 1.2 <br/>
                        lakh students who have chosen to<br/>
                         embark on their educational journey with us. </p>
                    </div></div>
                </div>
            </div>

            <button className='bg-[#4B006E] text-white mt-8 right-32 w-32 h-9 text-sm font-semibold leading-5 font-montserrat rounded-full'>Buy Now</button>
        </div>
        </>
    )
}

export default OurOffers