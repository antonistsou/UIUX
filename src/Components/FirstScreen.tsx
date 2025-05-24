import { forwardRef, useRef, useState } from 'react'
import animationData from "../assets/lotties/Animation - 1747157095078.json"
import Lottie from 'lottie-react'
import WelcomeComp from './WelcomeComp';
import { motion } from 'framer-motion';
import type { LottieRefCurrentProps } from "lottie-react";
import { MdLoop } from "react-icons/md";


const FirstScreen = forwardRef<HTMLDivElement>((_props, ref) => {

    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [loop, setLoop] = useState(true);
    const [rotate, setRotate] = useState("rotate-180");
    return (
        <><div ref={ref} className='flex flex-col items-center min-h-screen mt-20 justify-evenly xl:flex-row'  >
            <motion.div
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1.05,
                    x: 0,
                    transition: {
                        duration: 1,
                        ease: "easeOut"
                    }
                }}
                viewport={{ once: true }}>

                <Lottie
                    animationData={animationData}
                    lottieRef={lottieRef}
                    onDOMLoaded={() => lottieRef.current?.setSpeed(0.5)}
                    loop={loop}
                    onClick={() => {
                        setLoop(!loop)
                        setRotate((prev) =>
                            (prev === "rotate-180" ? 'rotate-0' : 'rotate-180')
                        );
                    }
                    }
                ></Lottie>
                {loop && <MdLoop className={`absolute top-14 md:left-[350px] sm:left-[250px]  transform  animate-spin transition-transform duration-500 ${rotate}`} />}
            </motion.div>
            <div className='sm:mt-10 md:mt-0'>
                <WelcomeComp />
            </div>
        </div >
            <div className='h-56 0 position bg-gradient-to-t to-transparent from-black'></div>
        </>


    );
});

export default FirstScreen;