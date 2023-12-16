import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar'
import HomeTop from './Components/HomeTop'
import BronzePackage from './Components/BronzePackage'
import OurOffers from './Components/OurOffers'
import Footer from './Components/Footer'
import { Route, useLocation, Routes } from 'react-router-dom'
import LogIn from './Components/LogIn'
import MyCoursesExplore from './Components/MyCoursesExplore'
import ContactUs from './Components/ContactUs'
import OurPackages from './Components/OurPackages'
import MyCourses from './Components/MyCourses'
import CreateAccount from './Components/CreateAccount'
import Dashboard from './Components/Dashboard'
import Blogs from './Components/Blogs'
import SeeBlog from './Components/SeeBlog'
import ShowPackages from './Components/ShowPackages'
import MainHome from './Pages/MainHome'
import AboutUs from "./Components/AboutUs";
import CourseCompletionCertificate from "./Components/CourseCompletionCertificate";
import ForgotPassword from "./Components/ForgotPassword";
const App = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const location =useLocation()
  useEffect(()=>{
  if(location.pathname == '/dummy' || location.pathname== '/showCourse' || location.pathname == '/signup' || location.pathname== '/login' || location.pathname== '/setNewPassword' ){
  return setShowNavbar(false)
  }else{
    return setShowNavbar(true)
  }
  },[location.pathname])
  return (
    <>
    
 <div className='bg-[#000000] '>
 {showNavbar &&<Navbar/>}
    <Routes>
    <Route path='/' element={<MainHome/>}/>
        <Route path='/page' element={<Blogs/>}/>
        <Route path='/exploreCourse' element={<MyCoursesExplore/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/seeblog' element={<SeeBlog/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<CreateAccount/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/showCourse' element={<ShowPackages/>}/>
        <Route path='/course' element={<MyCourses/>}/>
        <Route path='ourpackages' element={<OurPackages/>}/>
        <Route path='' element={<OurOffers/>}/>
        <Route path='/a' element={<HomeTop/>}/>
        <Route path='/viewpackage' element={<BronzePackage/>}/>
        <Route path='/setNewPassword' element={<ForgotPassword/>}/>
        <Route path='/certificate' element={<CourseCompletionCertificate/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        {/* <Route path='/afterlogin' element={<NavbarAfterLogin/>}/> */}
        <Route/>
    </Routes>


    {/* {showNavbar &&<Footer/>} || location.pathname == '/showCourse' || location.pathname == '/signup' || location.pathname == '/login' || location.pathname == '/setNewPassword' ||location.pathname == '/page' || location.pathname == '/dashboard'  || location.pathname == '/exploreCourse*/}

    {location.pathname == '/contactus' || "/login" || '/setNewPassword' ? null : <Footer/>}

    </div>
    </>
  )
}

export default App
