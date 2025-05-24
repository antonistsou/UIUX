import { motion } from 'framer-motion'

const AfterZoom = () => {
    return (
        <><div className='h-[25vh] pt-72 bg-white'>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 100,

                }}
                whileInView={{
                    opacity: 1,
                    y: -20,
                    scale: [0.01, 1],
                    transition: {
                        duration: 0.7,
                        ease: "easeOut"
                    }

                }}
                className='text-black translate-y-20 xl:text-5xl sm:text-lg'> Imagine The Future</motion.p>

        </div>
            <div className='flex h-[750px] bg-gradient-to-t items-center justify-center from-black to-white'>
            </div>
        </>
    )
}

export default AfterZoom