// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";
// const projects = [
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     // ...rest of the projects
// ];

//  export const HoverEffect = () => {
//     let hoveredIndex = null;

//     const setHoveredIndex = (id) => {
//         hoveredIndex = id;
//     };

//     return (
//         <div className=" mx-auto px-8 bg-[#0a192f] w-full h-auto ">
//             <div className="grid  max-w-screen-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
//                 {projects.map((project, id) => (
//                     <div
//                         key={project.link}
//                         className="relative group block p-2 h-full w-full"
//                         onMouseEnter={() => setHoveredIndex(id)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                         <AnimatePresence>
//                             {hoveredIndex === id && (
//                                 <motion.span
//                                     className="absolute inset-0 h-full w-full bg-slate-900/[0.8] block rounded-3xl"
//                                     layoutId="hoverBackground" // required for the background to follow
//                                     initial={{ opacity: 0 }}
//                                     animate={{
//                                         opacity: 1,
//                                         transition: { duration: 0.15 },
//                                     }}
//                                     exit={{
//                                         opacity: 0,
//                                         transition: { duration: 0.15, delay: 0.2 },
//                                     }}
//                                 />
//                             )}
//                         </AnimatePresence>
//                         <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
//                             <div className="relative z-50">
//                                 <div className="p-4">
//                                     <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
//                                         {project.title}
//                                     </h4>
//                                     <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
//                                         {project.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const projects = [
//     {
//         title: "Algochurn",
//         description:
//             "A web app that allows users to practice for front-end and UI interviews.",
//         link: "https://algochurn.com",
//     },
//     // ...rest of the projects
// ];

// export const HoverEffect = () => {
//     let [hoveredIndex, setHoveredIndex] = useState < number | null > (null);

//     return (
//         <div className="max-w-5xl mx-auto px-8">
//             <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
//                 {projects.map((project, id) => (
//                     <div
//                         key={project?.link}
//                         className="relative group  block p-2 h-full w-full "
//                         onMouseEnter={() => setHoveredIndex(id)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                         <AnimatePresence>
//                             {hoveredIndex === id && (
//                                 <motion.span
//                                     className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
//                                     layoutId="hoverBackground" // required for the background to follow
//                                     initial={{ opacity: 0 }}
//                                     animate={{
//                                         opacity: 1,
//                                         transition: { duration: 0.15 },
//                                     }}
//                                     exit={{
//                                         opacity: 0,
//                                         transition: { duration: 0.15, delay: 0.2 },
//                                     }}
//                                 />
//                             )}
//                         </AnimatePresence>
//                         <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
//                             <div className="relative z-50">
//                                 <div className="p-4">
//                                     <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
//                                         {project.title}
//                                     </h4>
//                                     <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
//                                         {project.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer"
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    // ...rest of the projects
];
// export const HoverEffect = () => {
//     const { ref, inView } = useInView();
//     const animation = useAnimation()
//     useEffect(() => {
//         if (inView) {
//             animation.start({
//                x:"0" ,
//                 transition: {
//                     type: "spring", duration: 1, bounce: 0.3
//                 }
//             })
//         }
//         if(!inView){
//             animation.start({x:"-100vw"})
//         }
//     },[inView])

//     return (
//         <div className="mx-auto px-4 bg-[#0a192f] w-full">
//             <motion.div  animate={animation} ref={ref} className="grid max-w-screen-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
//                 {projects.map((project, id) => (
//                     <div 
//                         // initial={{ opacity: 0, translateY: -50 }}
//                         // animate={{ opacity: 1, translateY: 0 }}
//                         // transition={{ duration: 0.3, delay: 0.1 * id }}
//                         key={project.link}
//                         className="group p-2"
//                         // onMouseEnter={() => setHoveredIndex(id)}
//                         // onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                         <motion.span
//                             className="absolute inset-0 bg-slate-900/[0.8] block rounded-3xl"
//                             layoutId="hoverBackground"
//                         />

//                         <div className="rounded-2xl p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700">
//                             <div className="p-4">
//                                 <h4 className="text-zinc-100 font-bold tracking-wide mt-4 text-center">
//                                     {project.title}
//                                 </h4>
//                                 <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
//                                     {project.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };
export const HoverEffect = () => {
    // let hoveredIndex = null;

    // const setHoveredIndex = (id) => {
    //     hoveredIndex = id;
    // };

    return (
        <div className=" mx-auto px-8 bg-[#0a192f] w-full h-auto ">
            <div className="grid  max-w-screen-lg mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10"
            >
                {projects.map((project, id) => (
                    <motion.div initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                        animate={{ opacity: 1, translateX: 50, translateY: 50 }}
                        transition={{ duration: 0.3, delay: 0.1 * 0.10 }}
                        key={project.link}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >



                        <motion.span


                            className="absolute inset-0 h-full w-full bg-slate-900/[0.8] block rounded-3xl"
                            layoutId="hoverBackground" // required for the background to follow
                        // initial={{ opacity: 0 }}
                        // animate={{
                        //     opacity: 1,
                        //     transition: { duration: 0.15 },
                        // }}
                        // exit={{
                        //     opacity: 0,
                        //     transition: { duration: 0.15, delay: 0.2 },
                        // }}
                        />


                        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
                            <div className="relative z-50">
                                <div className="p-4">
                                    <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
                                        {project.title}
                                    </h4>
                                    <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};