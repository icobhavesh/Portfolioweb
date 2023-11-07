import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeroSection = () => {
    const ref = useRef(null);
    const { ref: inViewRef, inView } = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className='hero-section'>
            <motion.div
                ref={inViewRef}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: inView ? 1 : 0.5, y: inView ? 0 : -50 }}
                transition={{ duration: 1 }}
                className='hero-content'
            >
                <h1 className='hero-title'>Welcome to my portfolio</h1>
                <p className='hero-description'>
                    I'm a web developer with a passion for creating beautiful and functional websites.
                </p>
                <button className='hero-button'>View my work</button>
            </motion.div>
        </section>
    );
};

export default HeroSection;