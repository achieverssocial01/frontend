import React,{useState} from 'react'
import LinkSent from './LinkSent'
import PassSuccessfullyChange from './PassSuccessfullyChange';

const ChangePassword = () => {
    
  const [passSuccess, setPassSuccess] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div>
       
        <div className='w-[980px] h-[440px] bg-[#1A1C24] shadow-md  mt-5 p-1 rounded '>

<div className='flex justify-between mt-8 text-white  '>

<h1 className='ml-4'>Change Password</h1>
</div>
<hr className='ml-4 mt-5 w-[945px]'/>

<div className='ml-4 mt-4'>
<div className="mb-4">
      <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="username">
      Enter Old Password
      </label>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]" id=" Enter Old Password" type="password" name=' Enter Old Password' placeholder="Enter old password"/>
      <p onClick={() => setOpenDialog(true)} className=' text-xs mt-1 ml-2 text-[#FF6584]'>Forget Password?</p>
    </div>

    <div className="mb-4">
      <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="username">
      Enter New Password
      </label>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]" name=' Enter New Password' id=" Enter New Password" type="password" placeholder="Enter New Password"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="username">
      Enter Password Again
      </label>
      <input className="shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-[#8B8989] font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]" id=" Enter Password Again" name=' Enter Password Again' type="password" placeholder="Enter Password Again"/>
    </div>

    <button onClick={() => setPassSuccess(true)} className='w-72 h-9 pl-1 mt-5 rounded-full bg-[#4B006E] font-lato text-base leading-5 font-semibold text-white '>Save Changes</button>
</div></div>
</div>


{openDialog && <LinkSent setOpenDialog={setOpenDialog} />}
{passSuccess && <PassSuccessfullyChange setPassSuccess={setPassSuccess} />}
</>
  
  )
}

export default ChangePassword
