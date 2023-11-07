import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
            {/* Container */}
            <
                motion.div
                initial={{ opacity: 0, y: '-150vh' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <section ref={ref}


                    className='max-w-[1000px] mx-auto p-4 flex flex-col md:justify-center justify-around  pt-10 '>
                    <div
                        ref={ref} style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className=' w-full flex justify-center items-center flex-col mb-7'>
                        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                        <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                    </div>
                    <motion.div ref={ref}
                        // key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full "
                        // initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                        // animate={{ opacity: 1, translateX: 50, translateY: 50 }
                        // transition={{ duration: 0.3, delay: id * 0.3 }}
                        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                        animate={{ opacity: 1, translateX: 50, translateY: 50 }}
                        transition={{ duration: 0.3, delay: 1 * 0.3 }} className='w-full
                         grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>GITHUB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>MONGO DB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>AWS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>Django</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>Sass</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>Mongodb</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <p className='my-4'>GraphQl</p>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </div>
    );
};
export default Skills;
// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Skills = () => {
//     const ref = useRef();
//     const [isInView, setIsInView] = useInView({ triggerOnce: true });

//     return (
//         <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//             <motion.div
//                 initial={{ opacity: 0, y: '-80vh' }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 2.2 }}
//                 ref={ref}
//             >
//                 <section className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-10'>
//                     <div className='w-full flex justify-center items-center flex-col mb-7'>
//                         <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
//                         <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
//                     </div>
//                     <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
//                         <SkillCard skill="HTML" />
//                         <SkillCard skill="CSS" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         <SkillCard skill="JavaScript" />
//                         {/* Add more skill cards here */}
//                     </div>
//                 </section>
//             </motion.div>
//         </div>
//     );
// };

// const SkillCard = ({ skill }) => {
//     return (
//         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
//             <p className='my-4'>{skill}</p>
//         </div>
//     );
// };

// export default Skills;

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion'

// const Skills = () => {
//     const ref = useRef(null);
//     const { ref: inViewRef, inView } = useInView({ threshold: 0.2 });

//     return (
//         <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//             {/* Container */}
//             <motion.div
//                 initial={{ opacity: 0, y: '-150vh' }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.2 }}
//             >
//                 <section ref={ref} className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-10'>
//                     <div ref={inViewRef} className=' w-full flex justify-center items-center flex-col mb-7'
//                         style={{
//                             transform: inView ? "none" : "translateX(-200px)",
//                             opacity: inView ? 1: 0,
//                             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
//                         }}>
//                         <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
//                         <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
//                     </div>
//                     <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
//                         {/* Skills list */}
//                     </div>
//                 </section>
//             </motion.div>
//         </div>
//     );
// };

// export default Skills;