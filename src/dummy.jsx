import React from 'react';
import { motion } from 'framer-motion';

const Dummy = () => {
    const variants = {
        initiall: {
            y: "-150vh",
            opacity: 0,
            // rotate:"20deg"
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5
            },
            color:"blue",
            rotate:"360deg"

        },
        }
    return (
        <motion.div
            initial="initiall"
            animate="animate"
            variants={variants}
            transition="transition"

        >
            <h1 className='text-6xl  text-center pt-20' >Bhavesh</h1>
        </motion.div>
    );
};

export default Dummy;
