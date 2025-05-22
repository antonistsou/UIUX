import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SecondAnimationScreen = () => {
    const zoomRef = useRef<HTMLDivElement>(null);
    const zoomRef2 = useRef<HTMLDivElement>(null);
    const vh = window.innerHeight;

    const { scrollY } = useScroll();

    const scale = useTransform(
        scrollY,
        [vh * 4, vh * 6, vh * 9],
        ["90%", "800%", "20000%"],
    );

    const scaleSides = useTransform(
        scrollY,
        [vh * 4, vh * 7],
        [1.2, 0.1]
    );

    const moveXs1 = useTransform(
        scrollY,
        [vh * 4, vh * 6],
        [0, -800]
    );

    const moveYs1 = useTransform(
        scrollY,
        [vh * 4, vh * 6],
        [100, -700],
    );


    const moveXs2 = useTransform(
        scrollY,
        [vh * 4, vh * 6],
        [-100, 900]
    );

    const moveYs2 = useTransform(
        scrollY,
        [vh * 4, vh * 6],
        [-100, 700]
    );

    return (
        <div className="relative h-[750vh] bg-black z-10 " >
            <div className="sticky top-0 h-screen bg-black ">
                <div className='absolute top-0 bottom-0 left-0 right-0 '>
                    <ul className="flex flex-col w-full h-screen pt-20 overflow-hidden gap-52">
                        <li className='flex justify-start w-full mx-36'>
                            <motion.section id="s1"
                                style={{ x: moveXs1, y: moveYs1, scale: scaleSides }}
                            >
                                <h2 className='text-base text-indigo-400 sm:text-lg md:text-xl lg:text-2xl xl:text-6xl'>Next Level</h2>
                            </motion.section>
                        </li>
                        <li className='flex justify-center w-full'>
                            <motion.div
                                initial={{
                                    opacity: 1,
                                }}
                                style={{
                                    scale,
                                }}
                            >
                                <section ref={zoomRef}>
                                    <h2 className='text-nowrap text-[10vw] pl-5'>Limitless</h2>
                                </section>
                            </motion.div>
                        </li>
                        <li className='flex justify-end w-full'>
                            <motion.section id="s2"
                                className='text-base text-purple-400 sm:text-lg md:text-xl lg:text-2xl xl:text-5xl'
                                style={{ x: moveXs2, y: moveYs2, scale: scaleSides }}
                            >
                                <h2>Projects</h2>
                            </motion.section>
                        </li>
                        <li ><section ref={zoomRef2}></section> </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default SecondAnimationScreen;
