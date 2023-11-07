
// // import React from 'react';
// // import { HiArrowNarrowRight } from 'react-icons/hi';
// // import me from '../assets/me.png.png'
// // import { Link } from "react-scroll";
// // import { animate, motion } from "framer-motion"

// // const Home = () => {
// //     const textVariants = {
// //         initial: {
// //             x: '100%',
// //         },
// //         animate: {
// //             x: '-100%',
// //             transition: {
// //                 x: {
// //                     duration:10, // Adjust the duration as needed
// //                     ease: 'linear',
// //                     repeat: Infinity,
// //                     repeatType: 'loop',
// //                 },
// //             },
// //         },
// //     };
// //     return (
// //         <div
// //             name="home"
// //             className="h-screen w-full bg-[#0a192f]"
// //         >
// //             <motion.div
// //                 initial={{ opacity: 0, x: '-100vh' }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 1.5 }} className="max-w-screen-lg mx-auto jus flex flex-col items-center justify-center h-full px-4 md:flex-row">
// //                 <div className="flex flex-col justify-center h-full">
// //                     <h2 className="text-4xl  sm:text-7xl font-bold text-white">
// //                         I'm a Full Stack Web Developer
// //                     </h2>
// //                     <p className="text-gray-500 py-4 max-w-md">
// //                         I have 4 years of experience in graphics design and web development.
// //                         Currently, I love to work on web application using technologies like
// //                         React, Tailwind, Next.js and Mongodb.
// //                     </p>
// //                     <div>
// //                         <Link
// //                             to="about"
// //                             smooth
// //                             duration={500}
// //                             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
// //                         >
// //                             About Me
// //                             <span className="group-hover:rotate-90 duration-300">
// //                                 <HiArrowNarrowRight size={25} className="ml-3" />
// //                             </span>
// //                         </Link>
// //                         <motion.div variants={textVariants} initial="initial" animate="animate" transition="transition"
// //                             className='w-full h-auto mt-[-150px] text-[200px] '>
// //                             <h1 className=' text-[#0000003e] -z-10 '>Portfolio </h1>
// //                         </motion.div>
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <img
// //                         src={me}
// //                         alt="my profile"
// //                         className="rounded-2xl mx-auto w-2/3 md:w-full"
// //                     />
// //                 </div>
// //             </motion.div>

// //         </div>
// //     );
// // };
// // export default Home
// import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png.png';
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";

// const Home = () => {
//     const textVariants = {
//         initial: {
//             x: '100%',
//         },
//         animate: {
//             x: '-100%',
//             transition: {
//                 x: {
//                     duration: 10, // Adjust the duration as needed
//                     ease: 'linear',
//                     repeat: Infinity,
//                     repeatType: 'loop',
//                 },
//             },
//         },
//     };

//     return (
//         <div name="home" className="h-screen w-full bg-[#0a192f]">
//             <motion.div
//                 initial={{ opacity: 0, x: '-100vh' }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1.5 }}
//                 className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//                 <div className="text-center md:text-left">
//                     <h2 className="text-4xl sm:text-7xl font-bold text-white">
//                         I'm a Full Stack Web Developer
//                     </h2>
//                     <p className="text-gray-500 py-4 max-w-md">
//                         I have 4 years of experience in graphics design and web development.
//                         Currently, I love to work on web applications using technologies like React, Tailwind, Next.js, and MongoDB.
//                     </p>
//                     <div>
//                         <Link
//                             to="about"
//                             smooth
//                             duration={500}
//                             className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
//                         >
//                             About Me
//                             <span className="group-hover:rotate-90 duration-300">
//                                 <HiArrowNarrowRight size={25} className="ml-3" />
//                             </span>
//                         </Link>
//                         <motion.div
//                             variants={textVariants}
//                             initial="initial"
//                             animate="animate"
//                             transition={textVariants.transition}
//                             className="w-full h-auto mt-4 md:mt-0 text-[200px]">
//                             <h1 className="text-[#0000003e] -z-10">Portfolio</h1>
//                         </motion.div>
//                     </div>
//                 </div>
//                 <div>
//                     <img
//                         src={me}
//                         alt="my profile"
//                         className="rounded-2xl mx-auto w-2/3 md:w-full"
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png.png';
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const Home = () => {
    // const textVariants = {
    //         initial: {
    //             x: '100%',
    //         },
    //         animate: {
    //             x: '-100%',
    //             transition: {
    //                 x: {
    //                     duration:10, // Adjust the duration as needed
    //                     ease: 'linear',
    //                     repeat: Infinity,
    //                     repeatType: 'loop',
    //                 },
    //             },
    //         },
    //     };
    
    

    return (
        <div
            name="home"
            className="h-screen w-full bg-[#0a192f]"
        >
            <motion.div    initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Web Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have 4 years of experience in graphics design and web development.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next.js and Mongodb.
                    </p>
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
                </div>
                <div>
                    <img
                        src={me}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};
export default Home;
// const textVariants = {
//             initial: {
//                 x: '100%',
//             },
//             animate: {
//                 x: '-100%',
//                 transition: {
//                     x: {
//                         duration:10, // Adjust the duration as needed
//                         ease: 'linear',
//                         repeat: Infinity,
//                         repeatType: 'loop',
//                     },
//                 },
//             },
//         };