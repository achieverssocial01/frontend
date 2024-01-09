import React, {useState, useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar2 from "./Components/NavBar2";
import MainHome from "./Pages/MainHome";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";
import SeeBlog from "./Components/SeeBlog";
import Dashboard from "./Components/Dashboard";
import CreateAccount from "./Components/CreateAccount";
import LogIn from "./Components/LogIn";
import ShowPackages from "./Components/ShowPackages";
import ForgotPassword from "./Components/ForgotPassword";
import BronzePackage from "./Components/BronzePackage";
import OurPackages from "./Components/OurPackages";
import MyCourses from "./Components/MyCourses";
import Checkout from "./Components/Checkout";
import MyCoursesExplore from "./Components/MyCoursesExplore";
import Certificates from "./Components/Certificates";
import MyPayments from "./Components/MyPayments";
import DashboardContextProvider from "./Context/DashboardContextProvider";
import CodeTest from "./Components/CodeTest";
const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname == "/dummy" ||
      location.pathname == "/showCourses" ||
      location.pathname == "/signup" ||
      location.pathname == "/login" ||
      location.pathname == "/setNewPassword"
    ) {
      return setShowNavbar(false);
    } else {
      return setShowNavbar(true);
    }
  }, [location.pathname]);
  return (
    <div className="bg-[#000000] select-none " >
      <DashboardContextProvider>
     {showNavbar && <NavBar2 />}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/seeblog" element={<SeeBlog/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<CreateAccount/>} />
        <Route path="/showCourses" element={<ShowPackages/>} />
        <Route path="/setNewPassword" element={<ForgotPassword/>} />
        <Route path="/course" element={<MyCourses />} />
        <Route path="ourpackages" element={<OurPackages />} />
        <Route path="/viewpackage" element={<BronzePackage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/check" element={<Checkout/>} />
        <Route path="/exploreCourse" element={<MyCoursesExplore />} />
        <Route path="/certificate" element={<Certificates/>} />
        <Route path="/payments" element={<MyPayments/>} />

      </Routes>
      </DashboardContextProvider>

{/* <CodeTest/> */}
      {/* <Footer /> */}

 
    </div>
  );
};

export default App;
