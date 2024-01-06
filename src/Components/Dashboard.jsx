import React, { useContext, useEffect, useState } from "react";
import Profile from "./Profile";
import Affiliate from "./Affiliate";
import Invoice from "./Invoice";
import MyPayments from "./MyPayments";
import Certificates from "./Certificates";
import Logout from "./Logout";
import ChangePassword from "./ChangePassword";
import CourseCompletionCertificate from "./CourseCompletionCertificate";
import ForgotPassword from "./ForgotPassword";
import DashboardContext from "../Context/DashboardContext";

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
const {selectedPage, setSelectedPage} = useContext(DashboardContext)
  // const [selectedPage, setSelectedPage] = useState(0);

  return (
      <div className="flex justify-start gap-6">
        <div className="bg-[#1A1C24] mr-0 mt-5 rounded relative z-0 w-56 h-[530px] text-center">
          <div className="pt-5 ml-16 ">
            <img
              className="w-12 h-12 rounded-full"
              src="https://www.secpay.io/img/Pic5.png"
              alt="Rounded avatar"
            />
          </div>

          <h1 className="text-white font-montserrat text-base mt-4 mr-3">
            Payal Dhabarde
          </h1>

          <div className="text-white right-0 mt-9 space-y-5 font-lato text-sm leading-4 font-medium">
            <div
              onClick={() => setSelectedPage(0)}
              style={{background: selectedPage === 0 ? "#4B006E" : "none" }}
              className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
            >
              <img src="/img/5.svg" className="h-6 w-5" />
              <span className="mt-1">Profile</span>
            </div>

            <div
              onClick={() => setSelectedPage(1)}
              style={{background: selectedPage === 1 ? "#4B006E" : "none" }}
              className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
            >
             <img src="/img/1.svg" className="h-6 w-5" />
              <span className="mt-1">Affiliate</span>
            </div>

            <div
              onClick={() => setSelectedPage(2)}
              style={{background: selectedPage === 2 ? "#4B006E" : "none" }}
              className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
            >
          <img src="/img/6.svg" className="h-6 w-5" />

              <span>Invoice</span>
            </div>

            <div
              onClick={() => setSelectedPage(3)}
              style={{background: selectedPage === 3 ? "#4B006E" : "none" }}
              className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
              >
              <img src="/img/3.svg" className="h-6 w-5" />
              <span className="mt-1">My Payments</span>
            </div>

            <div
              onClick={() => setSelectedPage(4)}
              style={{background: selectedPage === 4 ? "#4B006E" : "none" }}
              className={`flex hover:bg-[#4B006E] cursor-pointer w-full pl-12 gap-2 mr-6 py-2 rounded`}
              >
               <img src="/img/2.svg" className="h-6 w-5" />
              <span className="mt-1">Certificates</span>
            </div>

            <div
              onClick={() => setOpenDialog(true)}
              className="flex cursor-pointer gap-2 pl-12"
            >
          <img src="/img/4.svg" className="h- w-5" />
          <span className="mt-1">Logout</span>
            </div>
          </div>
        </div>

        {selectedPage === 0 && <Profile />}
        {selectedPage === 1 && <Affiliate />}
        {selectedPage === 2 && <Invoice />}
        {selectedPage === 3 && <MyPayments />}

        {selectedPage === 4 && <Certificates />}


        {selectedPage === 5 && <ChangePassword/>}
        
        {selectedPage === 5 && <ForgotPassword/>}

        {selectedPage === 5 && <CourseCompletionCertificate/>}
        {openDialog && <Logout setOpenDialog={setOpenDialog} />}
      </div>
  
  );
};

export default Dashboard;
