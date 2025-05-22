import { motion } from 'framer-motion'

const AfterZoom = () => {
    return (
        <><div className='h-[20vh] pt-72 bg-white'>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 200
                }}
                whileInView={{
                    opacity: 1,
                    y: -20,
                    scale: 1.5,
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    }

                }}
                viewport={{ once: true }}
            >

                <p className='text-5xl text-black translate-y-20'> Imagine The Future</p>
            </motion.div>
        </div>
            <div className='flex h-[750px] bg-gradient-to-t items-center justify-center from-black to-white'>
            </div></>
    )
}

export default AfterZoom