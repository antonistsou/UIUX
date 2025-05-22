import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";
import { ImDatabase } from "react-icons/im";
import { animate, inView, motion, useInView, useMotionValue, useScroll } from "framer-motion";
import { InView } from 'react-intersection-observer';

type Project = {
    icon: JSX.Element;
    name: string;
    description: string;
};

const ThirdTechScreen = () => {
    const project: Project[] = [
        { icon: <FaReact />, name: "React", description: "Build React Interactive Sites" },
        { icon: <RiNextjsFill />, name: "Next.js", description: "Next JS Custom WebApps" },
        { icon: <IoAnalyticsOutline />, name: "Analytics", description: "See Your Analytics and Improve" },
        { icon: <ImDatabase />, name: "Database", description: "Secure Your Storage" },
    ];

    const normalspeed = 20;

    const x = useMotionValue(0);

    const itemWidth = 160;
    const gapWidth = 40;
    const numItems = project.length * 2;
    const totalWidth = numItems * (itemWidth + gapWidth);

    useEffect(() => {
        const controls = animate(x, [0, -totalWidth / 2], {
            ease: "linear",
            duration: normalspeed,
            repeat: Infinity,
            repeatType: "loop",

        });
        return () => controls.stop();
    }, [x, totalWidth]);//dependencies



    return (

        <div className="flex items-center justify-center min-h-screen bg-black ">
            {/* <div className="z-10 blur-2xl h-[20vh] w-[20vh] relative left-[230px] bg-black "></div>
            <div className="z-10 blur-[70px] h-[20vh] w-[20vh] relative left-[200px] bg-black "></div> */}
            <div className="w-[900px] overflow-hidden relative z-0 blur-sides"  >
                <motion.div
                    className="flex flex-row gap-10"
                    style={{
                        x, width: totalWidth,
                    }}

                >
                    {[...project, ...project].map((p, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            transition={{ duration: 5 }}
                            animate={{
                                opacity: 1,
                            }}
                            key={index}
                            className="flex flex-col items-center w-40 group shrink-0"
                        >
                            <div className="scale-[300%] p-10 text-white">{p.icon}</div>
                            <div className="text-xl text-center text-white">{p.description}</div>
                            <p className="mt-2 text-base text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                {p.name}
                            </p>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
            {/* <div className="z-10 blur-3xl h-[20vh] w-[20vh] relative left-[-200px] bg-black "></div>
            <div className="z-10 blur-2xl h-[20vh] w-[20vh] relative left-[-180px] bg-black "></div> */}
        </div >
    );
};

export default ThirdTechScreen;
