
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from 'public/assets/me.png.png';
import logo from "../assets/portfolio logo.svg"
import { Link } from "react-scroll";
import { motion } from "framer-motion"
import "../App.css"
const Home = () => {
  
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#0a192f]"
        >
            <motion.div initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col  justify-center">
                    <h2 className="text-2xl sm:text-5xl flex-col-reverse font-bold text-white">
                        HEY, I'M BHAVESH SAXENA
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        <div>
                            <Link
                                to="about"
                                smooth
                                duration={500}
                                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                            >
                                About Me
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight size={25} className="ml-3" />
                                </span>
                            </Link>
                        </div>
                    </p>
                </div>
                <div className='block mx-auto p-10'>
                    <img
                        src={logo}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};
export default Home;
