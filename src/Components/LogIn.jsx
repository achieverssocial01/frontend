import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LinkSent from "./LinkSent";
import axios from "axios";
import { Usercontext } from "./ContextProvider";

const LogIn = () => {
  const [changePasswordComponent, setChangePasswordComponent] = useState(false);
  const [userinput, setuserinput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { user, setuser } = useContext(Usercontext);

  const submitUserData = async (e) => {
    e.preventDefault();
    const { email, password } = userinput;
    if (!email || !password) {
      return alert("All feilds are required!");
    } else {
      const response = await axios.post(
        "https://achieverbackend.onrender.com/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("auth", "datahai");
        setuser(true);
        navigate("/course");
      } else {
        alert("email or password does not match");
      }
    }
  };

  return (
    <>
      {!changePasswordComponent ? (
        <main className="flex h-screen  bg-gradient-to-b from-[#4B006E] to-[#FF6584]">
          <div className="m-[30px] hidden md:flex flex-col relative  shrink-0	">
            <img src="/img/AchiversLogo.png" alt="logo" className="w-[134px]" />
            <h2 className="font-[Montserrat] text-[1.625rem] text-white leading-[31.69px] mt-[85px]">
              Unlock a world of <br />
              knowledge and possibilities!
            </h2>
            <img
              src="/img/sign-removebg-preview.png"
              alt="img"
              className=" absolute  ml-[33px] w-[345px] aspect-[1/1] object-contain -bottom-[30px]"
            />
          </div>
          <div className="bg-[#000000ED] px-[48px] md:px-[121px] md:py-[162px] w-full flex flex-col justify-center gap-[42px] items-center rounded-[20px, 0px, 0px, 20px]">
            <div className="flex flex-col gap-[20px] items-center">
              <h2 className="text-white font-[Montserrat] text-[1.875rem]  leading-[36.57px] mt-[85px]">
                Welcome Back!
              </h2>
              <p className="text-[#8B8989] font-[Lato] text-[1rem] leading-[19.2px] ">
                Enter your details to Sign In{" "}
              </p>
            </div>
            <div className="flex justify-center gap-4 text-white w-full md:ml-5 text-lato font-normal">
              <div className="flex md:flex-1 gap-2 p-3 rounded-full border-2  items-center border-[#FFFFFF] bg-transparent">
                <FcGoogle className="md:w-7 w-7 h-6" />
                <h1 className="text-sm hidden md:block">Sign In with Google</h1>
              </div>

              <div className="flex md:flex-1 gap-2 p-3  rounded-full border-2 md:w-56 items-center border-[#FFFFFF] bg-transparent">
                <img
                  src="/img/facebook.png"
                  className="w-7 h-6 md:ml-3 text-blue-800"
                />
                <h1 className="text-sm hidden md:block">
                  Sign In with Facebook
                </h1>
              </div>
            </div>
            <span className="flex text-white gap-2">
              <hr className="w-20 mt-3  " />
              OR
              <hr className="w-20 mt-3 " />
            </span>
            <form className="flex flex-col gap-5 w-full">
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setuserinput({ ...userinput, email: e.target.value })
                }
                placeholder="Enter Email Address"
                style={{ background: "none" }}
                className="rounded-full p-[15px]  border-2 text-sm h-9  border-[#8B8989] "
              />

              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setuserinput({ ...userinput, password: e.target.value })
                }
                placeholder="Enter Password"
                className="rounded-full w-full p-[15px]  border-2 h-9 text-sm  border-[#8B8989] bg-[#100D0F]"
              />

              <div className="flex gap-2  justify-between">
                <span className="flex text-[#FF6584] gap-2 text-xs items-center">
                  <input
                    type="radio"
                    name="agree"
                    value="Subject1"
                    className=" h-4  bg-black"
                  />
                  <span>Remember Me?</span>
                </span>

                <span className=" flex text-xs text-[#FF6584]">
                  <Link
                    onClick={() => navigate("/setNewPassword")}
                    className=" cursor pointer"
                  >
                    Forget Password?
                  </Link>
                </span>
              </div>

              <button
                onClick={submitUserData}
                className="w-full h-9 rounded-full bg-[#4B006E] leading-7 font-bold text-white"
              >
                Continue
              </button>

              <span className="flex text-sm gap-2 justify-center">
                <p className="font-lato font-normal md:ml-12 text-[#8E8B8B]">
                  Don't have an account?
                </p>
                <Link to="/signup">
                  <button className=" text-[#FF6584] text-sm">
                    Click Here
                  </button>
                </Link>
              </span>
            </form>
          </div>
        </main>
      ) : (
        // <div className="flex justify-between h-screen items-center">
        //   <div className="md:w-[529px]  h-[608px] bg-gradient-to-b from-[#4B006E] to-[#FF6584] hidden md:block relative z-0">
        //     <img
        //       src="/img/logowhite.png"
        //       className=" w-32 h-20  ml-6 text-white font-montserrat leading-9 font-bold"
        //     />

        //     <p className="text-xl text-white font-montserrat leading-8 mt-2 ml-6 font-bold">
        //       Unlock a world of
        //       <br /> knowledge and possibilities!
        //     </p>

        //     <img
        //       src="/img/sign-removebg-preview.png"
        //       className="w-[220px] h-[320px] mt-16 ml-20"
        //     />
        //   </div>

        //   <div className=" md:px-[121px] md:py-[162px]  md:ml-[430px]  rounded-l-xl md:h-[608px] bg-[#000000] md:w-[650px] text-white text-center">
        //     <div className="md:ml-32 md:mt-24">
        //       <h1 className="font-montserrat font-bold leading-9 text-3xl">
        //         Welcome Back!
        //       </h1>
        //       <p className="text-[#8B8989] font-lato font-normal text-sm">
        //         Enter your details to Sign In
        //       </p>

        //       <div className="flex gap-4 mt-7  md:ml-5 text-lato font-normal">
        //         <div className="flex gap-2 rounded-full border-2 md:w-56 h-9 items-center border-[#FFFFFF] bg-transparent">
        //           <FcGoogle className="md:w-7 h-6 md:ml-3" />
        //           <h1 className="text-sm hidden md:block">Sign In with Google</h1>
        //         </div>

        //         <div className="flex gap-2 rounded-full border-2 md:w-56 h-9 items-center border-[#FFFFFF] bg-transparent">
        //           <img
        //             src="/img/facebook.png"
        //             className="w-7 h-6 md:ml-3 text-blue-800"
        //           />
        //           <h1 className="text-sm hidden md:block">Sign In with Facebook</h1>
        //         </div>
        //       </div>
        //       <span className="flex gap-2 border-1 text-[#8B8989] md:ml-36 mt-4">
        //         <hr className="w-20 mt-3 " /> OR <hr className="md:w-20 mt-3" />
        //       </span>
        //     </div>

        //     <form>
        //       <input
        //         type="email"
        //         name="email"
        //         onChange={(e) =>
        //           setuserinput({ ...userinput, email: e.target.value })
        //         }
        //         placeholder="Enter Email Address"
        //         style={{ background: "none" }}
        //         className="rounded-full md:w-[500px] md:ml-32 mt-3 border-2 text-sm h-9 p-3 border-[#8B8989] "
        //       />

        //       <input
        //         type="password"
        //         name="password"
        //         onChange={(e) =>
        //           setuserinput({ ...userinput, password: e.target.value })
        //         }
        //         placeholder="Enter Password"
        //         className="rounded-full md:w-[500px] md:ml-32 mt-3 border-2 h-9 text-sm p-3 border-[#8B8989] bg-[#100D0F]"
        //       />

        //       <div className="flex gap-2 md:ml-36">
        //         <input
        //           type="radio"
        //           name="agree"
        //           value="Subject1"
        //           className="mt-5 h-4 w-4 bg-black"
        //         />
        //         <span className=" flex mt-5 text-xs text-[#FF6584]">
        //           <p>Remember Me</p>
        //           <p
        //             onClick={() => navigate("/setNewPassword")}
        //             className="md:ml-64 cursor pointer"
        //           >
        //             Forget Password?
        //           </p>
        //         </span>
        //       </div>

        //       <button
        //         onClick={submitUserData}
        //         className="w-full h-9 mt-5 rounded-full bg-[#4B006E] leading-7 font-bold text-white"
        //       >
        //         Continue
        //       </button>

        //       <span className="flex text-sm gap-2 mt-2 justify-center">
        //         <p className="font-lato  font-normal md:ml-12 text-[#8E8B8B]">
        //           Don't have an account?
        //         </p>
        //         <Link to="/signup">
        //           <button className=" text-[#FF6584] text-sm">
        //             Click Here
        //           </button>
        //         </Link>
        //       </span>
        //     </form>
        //   </div>
        // </div>
        <ForgotPassword
          setChangePasswordComponent={setChangePasswordComponent}
        />
      )}
    </>
  );
};

export default LogIn;
