
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Skill = () => {
    const products = [
        { name: "Html" },
        { name: "Css" },
        { name: "Javascript" },
        { name: "Nodejs" },
        { name: "React" },
        { name: "Tailwind css " },
        { name: "Express.js " },
        { name: "MonogoDB" },

    ];
    const [product, setProducts] = useState(products);

    return (
        <div  name="Skill" className='w-full min-h-auto bg-[#0a192f] p-8 '>
            <h1 className='text-white text-center text-4xl'>My Skills</h1>
            <div className='max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 pt-10'>
                {product.map((product, idx) => {
                    return (
                        <InView triggerOnce key={idx}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: inView ? idx * 0.3 : 0 }}
                                    className='w-full sm:w-auto bg-[#01102974] sm:flex-1 mx-2 mb-4'
                                >
                                    <div className='shadow-md shadow-[#264060] hover:scale-110 p-4'>
                                        <span className='text-white text-center'>{product.name}</span>
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    );
                })}
            </div>
        </div>
    );
};

export default Skill;

