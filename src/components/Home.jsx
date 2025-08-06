import React from "react";
import myImg from "../assets/abdulrehman.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-16 md:pt-0">
        <div className=" rounded-xl overflow-hidden w-40 h-40 md:w-60 md:h-60 mt-8 md:mt-0 sm:-mt-12">
          <img
            src={myImg}
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full pl-4 md:pl-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-end Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">
            I love creating responsive web applications and experimenting with
            technologies like React.js, Tailwind CSS, Next.js, HTML, and CSS.
            I'm always looking to grow as a frontend developer.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
