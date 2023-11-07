import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = () => {
    const textVariants = {
        initial: {
            x: '100%',
        },
        animate: {
            x: '-100%',
            transition: {
                x: {
                    duration: 5, // Adjust the duration as needed
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                },
            },
        },
    };

    return (
        <div style={containerStyle}>
            <motion.div id="text" variants={textVariants} initial="initial" animate="animate" style={textStyle}>
                Continuous Text Animation
            </motion.div>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
};

const textStyle = {
    fontSize: '36px',
};

export default TextAnimation;
