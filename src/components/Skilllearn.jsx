// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// const Skilllearn = () => {
//     const products = [{
//         name: "javascript"
//     },
//     { name: "Mongodb" },
//     { name: "Nodejs" },
//     { name: "React" },
//     { name: "Tailwind css " },
//     { name: "Tailwind css " },
//     { name: "Tailwind css " },
//     { name: "Tailwind css " },
//     { name: "Tailwind css " },

//     ]
//     const [product, setProducts] = useState(products)
//     return (
//         <div className='w-full h-screen  bg-[#0a192f]  '>
//             <div className='
//             max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  p-4  pt-10 '>
//                 {
//                     product.map((products, idx) => {
//                         return <motion.div

//                         initial={{ opacity: 0, translateX: -50, translateY: -50 }}
//                         animate={{ opacity: 1, translateX: 50, translateY: 50 }}
//                         transition={{ duration: 0.3, delay: idx * 0.3 }} key={idx} className='w-22 h-14 shadow-md shadow-[#040c16] hover:scale-110 duration-500  place-items-center  overflow-hidden  text-center p-4 '>
//                             <span className=' text-center text-white   '>{products.name}</span>
//                         </motion.div>
//                     })
//                 }


//             </div>

//         </div>
//     )
// }

// export default Skilllearn

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Skilllearn = () => {
//     const products = [
//         { name: "javascript" },
//         { name: "Mongodb" },
//         { name: "Nodejs" },
//         { name: "React" },
//         { name: "Tailwind css " },
//         { name: "Tailwind css " },
//         { name: "Tailwind css " },
//         { name: "Tailwind css " },
//         { name: "Tailwind css " },
//     ];
//     const [product, setProducts] = useState(products);

//     return (
//         <div className='w-full min-h-screen bg-[#0a192f]'>
//             <div className='max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 pt-10'>
//                 {product.map((product, idx) => {
//                     return (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, scale: 0 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.3, delay: idx * 0.3 }}
//                             className='w-full sm:w-auto sm:flex-1 mx-2 mb-4'
//                         >
//                             <div className='shadow-md shadow-[#040c16] hover:scale-110 p-4'>
//                                 <span className='text-white text-center'>{product.name}</span>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Skilllearn;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const Skilllearn = () => {
    const products = [
        { name: "javascript" },
        { name: "Mongodb" },
        { name: "Nodejs" },
        { name: "React" },
        { name: "Tailwind css " },
        { name: "Sass" },
        { name: "FramerMotion " },
        { name: "Tailwind css " },

    ];
    const [product, setProducts] = useState(products);

    return (
        <div className='w-full min-h-auto bg-[#0a192f]'>
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
                                    className='w-full sm:w-auto sm:flex-1 mx-2 mb-4'
                                >
                                    <div className='shadow-md shadow-[#040c16] hover:scale-110 p-4'>
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

export default Skilllearn;

