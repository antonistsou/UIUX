import { motion } from 'framer-motion'

const WelcomeComp = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -200
            }}
            whileInView={
                {
                    opacity: 1,
                    scale: 1.1,
                    x: 0,
                    transition: {
                        duration: 1,
                        ease: "easeOut"
                    }
                }
            }
            viewport={{ once: true }}
        >
            <div className='bg-[#2a2a2a] opacity-85 xl:w-[40vw] xl:h-[37vh] sm:h-[39vh]  md:h-[45vh] rounded-xl sm:w-[80vw]'>
                <div className="group absolute flex flex-row items-center justify-center space-x-1.5 translate-y-1 translate-x-1 p-5 ">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full group-hover:animate-bounce-first transition-all"></span>
                    <span className="w-2.5 h-2.5 bg-orange-400 rounded-full group-hover:animate-bounce-sec transition-all"></span>
                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full group-hover:animate-bounce-thrd transition-all"></span>
                </div>
                <div className='flex-col md:pt-10 '>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        whileInView={
                            {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                    ease: "easeOut"
                                }
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-300 md:pt-10 md:text-3xl text-wrap sm:text-2xl sm:pt-14'>Welcome to <span className='inline-block text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text'>softLanding</span></p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        whileInView={
                            {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1.1,
                                    delay: 0.5,
                                    ease: "easeOut"
                                }
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <p className='pt-3 text-gray-100 md:text-xl text-wrap sm:text-base'> Mission a solid,custom project for your needs that will land soft and easy. </p>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        whileInView={
                            {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1.2,
                                    delay: 1,
                                    ease: "easeOut"
                                }
                            }
                        }
                        viewport={{ once: true }}
                    >

                        <p className='pt-5 text-gray-200 md:text-base text-wrap sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel laboriosam animi? Recusandae dolore quidem, obcaecati iste odit, deleniti aliquid non quam autem culpa sapiente dolorem in beatae quas sit!</p>
                    </motion.div>
                </div>

            </div>
        </motion.div >
    )
}

export default WelcomeComp