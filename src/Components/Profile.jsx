import React, { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import ChangePassword from "./ChangePassword";
import { FaCircleExclamation } from "react-icons/fa6";

const Profile = () => {
  const [changePasswordComponent, setChangePasswordComponent] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div className="w-[980px] h-48 bg-[#1A1C24] mt-5 pr p-5 rounded ">
          <h1 className="font-montserrat text-white">Sponsor Information</h1>

          <hr className="mt-5" />

          <div className="flex justify-between mt-8 text-white  ">
            <h1>Name: Ashwini Hingolikar</h1>
            <h1 className="mr-80">Referral ID : 102745273</h1>
          </div>
        </div>

      { !changePasswordComponent ? <div className="w-[980px] h-[640px] bg-[#1A1C24] shadow-md  mt-5 p-1 rounded ">
          <div className="flex justify-between mt-8 text-white  ">
            <h1 className="ml-4">Name: Ashwini Hingolikar</h1>
            <h1 className="mr-4">Your Referral ID : 102745273</h1>
          </div>
          <hr className="ml-4 mt-5 w-[930px]" />

          <form
            // onSubmit={handleSumit}
            className=" mt-5 ml- px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name
                </label>

                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="username"
                  type="text"
                  placeholder="Payal Dhabarde"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="number"
                  type="number"
                  placeholder="9811234564"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>

                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="email"
                  type="email"
                  placeholder="payal@gmail.com"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="gender"
                  type="text"
                  placeholder="Add Gender"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="birthday"
                >
                  Birthday
                </label>
                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="birthday"
                  type="text"
                  placeholder="Add Birthday"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="state"
                >
                  State
                </label>
                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
               
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="state"
                  type="text"
                  placeholder="Maharashtra"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>

                <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                <input
                  className="shadow bg-[#1A1C24] appearance-none w-full text-white font-poppins text-xs leading-5 focus:outline-none "
                  id="city"
                  type="text"
                  placeholder="Add City"
                />
                 <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-100 text-sm font-bold mb-2"
                  htmlFor="pincode"
                >
                  Pincode
                </label>
             <div className=" flex shadow bg-[#1A1C24] appearance-none border rounded-full w-72 py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
                <input
                  className="shadow bg-[#1A1C24] appearance-none  w-full text-white font-poppins text-xs leading-5 focus:outline-none  "
                  id="pincode"
                  type="pincode"
                  placeholder="Add Pincode"
                />
                <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
              </div></div>
            </div>

            <div className="mb-4">
              <div>
              <label
                className="block text-gray-100 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <div className="flex bg-[#1A1C24] appearance-none border rounded-full w-[596px] py-2 px-3 text-white font-poppins text-xs leading-5 focus:outline-none focus:shadow-outline border-[#8B8989]">
              <input
                className="shadow bg-[#1A1C24] appearance-none rerd  w-full ml-4  text-white font-poppins text-xs leading-5 focus:outline-none focus:border-none border-transperant"
                id="address"
                type="text"
                placeholder="Add Address"/>
                <FaCircleExclamation className="rounded-full text-[#F23E3E] h-5 w-5  mr-2"/>
                </div>
                </div>
            </div>

            

            <div className="flex gap-4">
              {/* <Link to="/changePassword"> */}
                <button
                  onClick={()=>setChangePasswordComponent(true)}
                  className="w-52 px-2 py-2 h-11 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white flex gap-2"
                >
                  <RiLockPasswordFill className=" ml-1 w-6 h-6" />
                  Change Password
                </button>
              {/* </Link> */}
              <button className="w-36 h-11 px-2 py-2 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white flex gap-2 ml-1">
                <FaPen className="ml-1 h-6 w-6" />
                Edit Profile
              </button>
            </div>
          </form>
        </div> :
        <ChangePassword setChangePasswordComponent={setChangePasswordComponent}/>}
        <div></div>
      </div>
    </>
  );
};

export default Profile;
