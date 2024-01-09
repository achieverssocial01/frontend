import React from 'react'
import HomeTop from '../Components/HomeTop'
import Subscribe from '../Components/Subscribe'
import OurPackages from '../Components/OurPackages'
import LogIn from '../Components/LogIn'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import GptCodeTest from '../Components/GptCodeTest'
const MainHome = () =>{

    return(

        <div>
        <HomeTop/>
        {/* <GptCodeTest/> */}
        <OurPackages/>
        <Testimonials/>
        <Subscribe/>
        </div>
    )
}

export default MainHome