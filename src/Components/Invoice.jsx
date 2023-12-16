import React from 'react'
import { IoSearch } from "react-icons/io5";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";

const Invoice = () => {
  return (
    <>
    
    <div className='bg-[#1A1C24] h-[630px] w-[989px] mt-5'>
    <div className=''>
        <div className='flex justify-between '>
        <h1 className='mt-8 text-white font-montserrat text-xl leading-6 font-semibold ml-4 pt-3'>Invoice Details</h1>
        <div className='flex gap-1 w-[280px] h-11 mr-3 mt-8 border-2  border-[#FFFFFF] rounded-3xl'>
        <IoSearch className='text-white h-5 mt-2 ml-3 w-6'/>
        <input type='search' name='search' placeholder='Search' className=' text-[#8B8989] w-48 h-7 focus:outline-none font-lato text-sm mt-1 bg-[#1A1C24]'/>
        </div></div>
    
    <hr className='ml-4 mt-6 w-[955px]'/>



    <div className="flex flex-col text-white">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-[696px] py-2 sm:px-3 lg:px-3">
      <div className="overflow-hidden ">
        <table className="min-w-[696px] border-separate border-spacing-y-5 mt-7 ml-12 text-center text-white text-sm font-light">
          <thead className=" bg-[#4B006E] font-medium dark:border-neutral-500 w-96 h-8 mt-3 mb-3">
            <tr >
              <th scope="col" className="px-3 rounded-l-lg py-2">Invoice</th>
              <th scope="col" className="px-3 py-2">Sponsor</th>
              <th scope="col" className="px-3 py-2">Package</th>
              <th scope="col" className="px-3 py-2">Amount</th>
              <th scope="col" className="px-3 py-2">Payment Status</th>
              <th scope="col" className="px-3 rounded-r-lg py-2">Date</th>
            </tr>
          </thead>
          <tbody >
            <tr className=" dark:border-neutral-500  w-56 h-4 bg-[#0F100E]">
              <td className="whitespace-nowrap px-3  rounded-l-lg py-3 font-medium">
              #ldhdh754759
              </td>
              <td className="whitespace-nowrap px-3  py-2">Payal Dhabarde</td>
              <td className="whitespace-nowrap px-3 py-2">Silver Package</td>
              <td className="whitespace-nowrap px-3 py-2">₹ 1,899</td>
              <td className="whitespace-nowrap px-3 py-2 flex ml-3 gap-1"><BsFillExclamationCircleFill className='w-4 h-4 text-[#E8B910] space-y-1'/>Pending</td>
              <td className="whitespace-nowrap px-3 rounded-r-lg py-2">12/12/2023</td>
            </tr>
            <tr
              className=" border-primary-200 bg-[#0F100E]  text-white">
                <td className="whitespace-nowrap px-32 rounded-l-lg py-3 font-medium">
              #ldhdh754759
              </td>
              <td className="whitespace-nowrap px-3  py-2">Payal Dhabarde</td>
              <td className="whitespace-nowrap px-3 py-2">Silver Package</td>
              <td className="whitespace-nowrap px-3 py-2">₹ 1,899</td>
              <td className="whitespace-nowrap px-3 py-2 flex ml-2 gap-1"><IoCheckmarkCircle className='w-5 h-5 text-[#207B25]'/>Pending</td>
              <td className="whitespace-nowrap px-3 rounded-r-lg py-2">12/12/2023</td>
            </tr>
            <tr
              className="space-x-3 b w-64 h-7 p-2  text-white bg-[#0F100E]">
                <td className="whitespace-nowrap px-3  rounded-l-lg py-3 font-medium">
              #ldhdh754759
              </td>
              <td className="whitespace-nowrap px-3  py-2">Payal Dhabarde</td>
              <td className="whitespace-nowrap px-3 py-2">Silver Package</td>
              <td className="whitespace-nowrap px-3 py-2">₹ 1,899</td>
              <td className="whitespace-nowrap px-3 py-2 flex gap-1"><img src='/img/cancel.png' className='w-4 h-4 '/>Pending</td>
              <td className="whitespace-nowrap px-3 rounded-r-lg py-2">12/12/2023</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>  
    </div>
</>
  )
  }

    export default Invoice