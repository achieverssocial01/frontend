import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbCertificate } from "react-icons/tb";
import { PiKeyFill } from "react-icons/pi";
import {
  MdOutlineAccessTime,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const BronzePackage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState([]);


console.log(active)


  return (
    <>
      <div className="flex bg-[#1A1C24] mt-5 ">
        <div className="absolute z-10 ">
          <div className=" bg-[#100E0E] rounded-md ml-[750px] -z-10 absolute mt-3 w-[460px] ">
            <div className="w-[430px] ml-4 rounded h-56 bg-yellow-400 mt-2">
              <img
                src="/img/silverPckage.png"
                className="w-80 h-64 -top-1 ml-12"
              />
            </div>
            <div className="ml-8">
              <h1 className="text-base font-bold leading-5 mt-3 font-montserrat text-white">
                Bronze Package
              </h1>
              <h1 className="text-base font-bold leading-5 font-montserrat text-white">
                ₹‎ 1,899
              </h1>
              <button
                onClick={() => navigate("/check")}
                className="w-80 mt-2 mr-2 mb-4 h-8 bg-[#4B006E] rounded-full font-lato leading-5 font-semibold text-sm text-white"
              >
                Buy Now
              </button>
            </div>{" "}
          </div>

          <div className="  w-[460px] h-56 mt-96 rounded -z-10 absolute ml-[750px] bg-[#1A1C24]">
            <h1 className="text-white font-bold leading-6 text-xl p-4 ml-1">
              This Course Includes :
            </h1>

            <span className="flex gap-2 ml-3">
              <TbCertificate className="text-[#4B006E] w-7 h-7 mt-1 mb-1" />
              <p className=" font-lato font-medium text-sm  text-white mt-2">
                Certificate of completion
              </p>
            </span>

            <span className="flex gap-2 ml-3">
              <PiKeyFill className="text-[#4B006E] w-7 h-7 mb-1 mt-1" />
              <p className=" font-lato font-medium text-sm  text-white mt-2">
                Lifetime access
              </p>
            </span>

            <span className="flex gap-2 ml-3">
              <MdOutlineAccessTime className="text-[#4B006E] w-7 h-7 mb-1 mt-1" />
              <p className=" font-lato font-medium text-sm  text-white mt-2">
                21.1 hours of on-demand Content
              </p>
            </span>

            <span className="flex gap-2 ml-3">
              <FaCalendar className="text-[#4B006E] w-7 h-7 mt-1 mb-1" />
              <p className=" font-lato font-medium text-sm text-white mt-2">
                Assignments
              </p>
            </span>
          </div>
        </div>

        <div className="relative z-0">
          <div className="  w-full h-32 ml-9 mb-24">
            <h1 className="text-3xl font-bold leading-9 font-montserrat text-white mt-3">
              Bronze Package
            </h1>
            <p className="text-[#FFFFFF] mt-4 font-normal font-lato text-xs leading-5">
              Our Bronze Package is meticulously crafted to empower your growth
              in the dynamic professional
              <br /> landscape. If you aspire to thrive in fields like MS-Office
              tools, cracking Interview or in any business
              <br /> sector, this course bundle is your gateway to success. With
              a diverse range of topics, this
              <br /> comprehensive package positions you as a standout leader in
              your chosen field. From honing your <br />
              professional skills to enhancing your mental flexibility, the
              Bronze Package is poised to be a <br />
              transformative force driving your overall growth.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[690px] h-[550px] rounded bg-[#1A1C24] mt-9 ml-9">
        <h1 className="text-3xl font-bold leading-9 font-montserrat p-2 text-white mt-6  ml-3">
          Course Overview
        </h1>
        <p className="text-[#FFFFFF] mt-4 font-normal  font-lato text-xs leading-5 ml-3">
          Overview for Bronze Package Unlock a world of opportunities with our
          carefully curated Bronze
          <br /> Course Bundle, designed to equip you with essential skills that
          are indispensable in today's
          <br /> professional landscape. Whether you're a student looking to
          bolster your resume or a seasoned
          <br /> professional aiming to enhance your proficiency, this
          comprehensive package has something for
          <br /> everyone. We've carefully selected courses that cover essential
          skills demanded by employers across <br />
          industries. With hands-on training and practical insights, you'll be
          well-prepared for real-world
          <br /> challenges. Our courses are led by industry experts who bring
          their knowledge and experience to the
          <br /> virtual classroom, ensuring you receive top-notch education. We
          believe in making quality education
          <br /> accessible to all. The Bronze Course Bundle offers incredible
          value for your investment in personal and
          <br /> professional growth. Take the first step toward a brighter
          future with LeadsGuru.
        </p>

        <h4 className="text-white font-lato ml-4 mt-5 text-base leading-5 font-light ">
          What you'll learn{" "}
        </h4>

        <div className="text-white font-lato ml-4 mt-1 text-sm leading-5 font-light mb-5">
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Word Course{" "}
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Excel Course{" "}
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Powerpoint Course
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Interview Mastery Course
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" /> Freelancing Mastery Course <br />
            Courses Bundle Inclusion
          </p>{" "}
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Word Course
          </p>{" "}
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Excel Course
          </p>{" "}
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Ms Powerpoint Course{" "}
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Interview Mastery Course{" "}
          </p>
          <p className="flex gap-2">
            <RxDotFilled className="mt-1" />
            Freelancing Mastery Course
          </p>
        </div>
      </div>

      <div className="w-[690px] max-h-[880px] pb-3 rounded bg-[#1A1C24] mt-7 ml-9">
        <h1 className="text-3xl font-montserrat font-bold leading-7 p-4 text-white">
          Course Content
        </h1>

        <span className="flex gap-2 text-lg font-semibold font-lato ml-5 text-white">
          <p>126 Lectures</p>
          12 Hours
        </span>

        {/* <div className="px-5">
          <div>
            <div className="flex justify-between items-center rounded-md bg-[#100D0F] px-4 py-1 ">
              <h4 className="text-white">How to crack an Interview with Ease</h4>
              {active.includes(1) ? (
                <IoIosArrowUp
                  onClick={() =>
                    setActive(
                      active.includes(1)
                        ? active.filter((item) => item !== 1)
                        : [...active, 1]
                    )
                  }
                  className="h-5 w-5 text-white"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() =>
                    setActive(
                      active.includes(1)
                        ? active.filter((item) => item !== 1)
                        : [...active, 1]
                    )
                  }
                  className=" h-5 w-5 text-white"
                />
              )}
            </div>
            {active.includes(1) && (
            <div className=" text-gray-600  max-h-64 bg-red-500">
              <p className="text-green-500 text-transparent ">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
          </div>
        </div> */}

        <div className="accordian-1 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
          <div className="question flex justify-between">
            <h4 className="mt-1 ml-1">How to crack an Interview with Ease</h4>
            {active.includes(1) ? (
              <IoIosArrowUp
                onClick={() =>
                  setActive(
                    active.includes(1)
                      ? active.filter((item) => item !== 1)
                      : [...active, 1]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            ) : (
              <IoIosArrowDown
                onClick={() =>
                  setActive(
                    active.includes(1)
                      ? active.filter((item) => item !== 1)
                      : [...active, 1]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            )}
          </div>
          {active.includes(1) && (
            <div className="answer  text-gray-600  max-h-64">
              <p className="text-green-500 text-transparent bg-red-500">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
        </div>

        <div className="accordian-2 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
          <div className="question flex justify-between">
            <h4 className="mt-1 ml-1">How to crack an Interview with Ease</h4>
            {active.includes(2) ? (
              <IoIosArrowUp
                onClick={() =>
                  setActive(
                    active.includes(2)
                      ? active.filter((item) => item !== 2)
                      : [...active, 2]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            ) : (
              <IoIosArrowDown
                onClick={() =>
                  setActive(
                    active.includes(2)
                      ? active.filter((item) => item !== 2)
                      : [...active, 2]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            )}
          </div>
          {active.includes(2) && (
            <div className="answer  text-gray-600  max-h-32">
              <p className="text-green-500 text-transparent bg-red-500">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
        </div>

        <div className="accordian-3 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
          <div className="question flex justify-between">
            <h4 className="mt-1 ml-1">How to crack an Interview with Ease</h4>
            {active.includes(3) ? (
              <IoIosArrowUp
                onClick={() =>
                  setActive(
                    active.includes(3)
                      ? active.filter((item) => item !== 3)
                      : [...active, 3]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            ) : (
              <IoIosArrowDown
                onClick={() =>
                  setActive(
                    active.includes(3)
                      ? active.filter((item) => item !== 3)
                      : [...active, 3]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            )}
          </div>
          {active.includes(3) && (
            <div className="answer  text-gray-600  max-h-64">
              <p className="text-green-500 text-transparent bg-red-500">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
        </div>

        <div className="accordian-4 bg-[#100D0F] w-[670px] text-white ml-2 mt-4 pl-1 pr-4 mb-4 rounded ">
          <div className="question flex justify-between">
            <h4 className="mt-1 ml-1">How to crack an Interview with Ease</h4>
            {active.includes(4) ? (
              <IoIosArrowUp
                onClick={() =>
                  setActive(
                    active.includes(4)
                      ? active.filter((item) => item !== 4)
                      : [...active, 4]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            ) : (
              <IoIosArrowDown
                onClick={() =>
                  setActive(
                    active.includes(4)
                      ? active.filter((item) => item !== 4)
                      : [...active, 4]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            )}
          </div>
          {active.includes(4) && (
            <div className="answer  text-gray-600  max-h-64">
              <p className="text-green-500 text-transparent bg-red-500">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
        </div>

        <div className="accordian-5 bg-[#100D0F] w-[670px] text-white ml-2 mt-4  pl-1 pr-4 mb-4 rounded ">
          <div className="question flex justify-between">
            <h4 className="mt-1 ml-1">How to crack an Interview with Ease</h4>
            {active.includes(5) ? (
              <IoIosArrowUp
                onClick={() =>
                  setActive(
                    active.includes(5)
                      ? active.filter((item) => item !== 5)
                      : [...active, 5]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            ) : (
              <IoIosArrowDown
                onClick={() =>
                  setActive(
                    active.includes(5)
                      ? active.filter((item) => item !== 5)
                      : [...active, 5]
                  )
                }
                className="icon mr-4 mt-2 h-5 w-5"
              />
            )}
          </div>
          {active.includes(5) && (
            <div
              data-collapse="animated-collapse-2"
              className="answer  text-yellow-600 max-h-64"
            >
              <p className="text-green-500 text-transparent bg-red-500 ">
                Review the job description to understand the types of skills and
                <br /> qualifications the employer expects you to have. It would
                also give you <br />
                an idea about the duties and responsibilities the job entails.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BronzePackage;
