import React from 'react'
import { motion } from 'framer-motion'
const Motion = () => {
    return (
        <div className='w-full h-screen bg-slate-950' >


            <motion.div className='pt-10'
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Hi</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    perspiciatis voluptates nihil dolores eum architecto eligendi
                </p>
            </motion.div>
        </div>

    )
}

export default Motion