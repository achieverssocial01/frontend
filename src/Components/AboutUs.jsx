import React from "react";
import Subscribe from "./Subscribe";
const AboutUs = () => {
  const containerStyle = {
    backgroundImage: "url(/img/bgimg.png)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
    width: "screen",
    height: "600px",
    // marginTop: "-270px",
  };
  return (
    <>
      <div style={containerStyle} className="text-center relative  md:ml-9 ">
        <div className="absolute z-10 md:ml-64 mt-48">
          <h1 className="md:text-2xl  font-montserrat font-bold  text-white">
            About Achievers Club
          </h1>
          <p className="text-base font-lato mt-5 text-[#8B8989]">
            Welcome to Achievers Club, where we empower the youth to turn their
            aspirations
            <br /> into achievements. At Achievers Club, we believe in the
            transformative power of <br />
            education and the limitless potential of every individual. Our
            platform is not just an
            <br /> educational hub; it's a gateway to opportunities and
            financial independence.
          </p>
          <button className="md:w-36 mt-8 rounded-full md:h-9 text-white font-montserrat font-semibold bg-[#4B006E]">
            Get Started
          </button>
        </div>
      </div>

      <div className="md:ml-12">
        <div>
          <div className="md:w-16 absolute top-[735px] z-10 mb-32 md:h-16 md:ml-12 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
            <img src="/img/ourmission.png" className="md:w-12 mt-3 sm:w-6 md:ml-2 md:h-12 " />
          </div>

          <div className="relative  text-white mt-12 md:ml-20 rounded md:w-[560px]  md:h-48 bg-[#1A1C24]">
            <h1 className="md:ml-7 pt-11 md:text-2xl font-montserrat leading-7">
              Our Mission
            </h1>
            <p className="font-lato text-xs leading-5 md:ml-7">
              Our mission is to provide quality education that goes beyond
              traditional boundaries. We are dedicated to equipping young minds
              with the skills and knowledge needed to thrive in today's dynamic
              world. More than just a learning platform, we are a catalyst for
              personal and professional growth.
            </p>
            <img
              src="/img/Vector2.png"
              className="md:w-32 md:h-32 md:ml-[570px] -mt-11 pb-4"
            />{" "}
          </div>
        </div>

        <div className="md:ml-[460px]">
          <div className="md:w-16 absolute top-[985px]  z-10 mb-32 md:h-16 md:ml-12 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
            <img
              src="/img/jobgeneration.png"
              className="md:w-12 mt-3 md:ml-2 md:h-12 "
            />
          </div>

          <div className="relative  text-white mt-16 rounded md:w-[560px] md:ml-20 md:h-56 bg-[#1A1C24]">
            <h1 className="md:ml-7 pt-9 md:text-2xl font-montserrat leading-7">
              Job Generation and Youth
              <br /> Empowerment
            </h1>
            <p className="font-lato text-xs leading-5 ml-7">
              At Achievers Club, we go beyond the conventional approach to
              <br /> education. We are committed to not only imparting knowledge
              but
              <br /> also creating real-world opportunities for the youth. Our
              unique model
              <br /> integrates education with job generation, allowing
              individuals to earn
              <br /> through affiliate marketing..
            </p>
            <img
              src="/img/vector3.png"
              className="md:w-32 md:h-32 top-36 md:right-[565px] pb-2 absolute z-20 "
            />
          </div>
        </div>

        <div>
          <div className="md:w-16 absolute top-[1280px] z-10 mb-24 md:h-16 md:ml-12 rounded-full bg-gradient-to-b from-[#4B006E] to-[#FF6584] ">
            <img src="/img/jobgenrated.png" className="md:w-12 mt-3 md:ml-2 md:h-12 " />
          </div>
          <div className="relative  text-white mt-16 rounded md:w-[560px] md:ml-20 md:h-48 bg-[#1A1C24]">
            <h1 className="md:ml-7 pt-11 md:text-2xl font-montserrat leading-7">
              How We Generate Jobs
            </h1>
            <p className="font-lato text-xs leading-5 ml-7">
              Our innovative approach involves connecting our learners with
              practical avenues for income generation. Through affiliate
              marketing partnerships, we empower our members to monetize their
              skills and knowledge. This not only creates a sustainable income
              stream but also fosters a culture of entrepreneurship among the
              youth. .
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-32 ">
        <img
          src="/public/img/raodmap.png"
          className="md:w-[1270px] md:h-[390px] absolute z-10"
        />

        <div className="relative z-0 md:ml-[740px] mt-40 md:overflow-hidden mb-32">
          <h1 className="font-montserrat text-white  md:text-2xl leading-7 text-end">
            What sets us apart?
          </h1>
          <p className="font-lato text-xs text-end text-white leading-5">
            Discover a unique learning journey with diverse courses tailored to
            <br /> today's job market. Our hands-on programs include affiliate
            marketing
            <br /> opportunities for earning while learning. Join our thriving
            community
            <br /> for networking and collaboration, redefining your educational
            <br /> experience with practical skills and support for growth.
          </p>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default AboutUs;
