import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface props {
    delay: number;
}

const SplashScreen = ({ delay }: props) => {
    const words = ["Mindset", "Momentum", "Timing"];
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, delay - 300); // adjust this delay as needed

        return () => clearTimeout(timer);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5,
            },
        },
        hide: {
            opacity: 0,
            transition: {
                duration: delay - 2999.3
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className='flex items-center justify-center h-screen pb-10 space-x-4 text-5xl text-white bg-black sm:flex-col xl:flex-row'
            variants={container}
            initial="hidden"
            animate={fadeOut ? "shide" : "show"}
        >
            {words.map((word) => (
                <motion.div key={word} variants={child}>
                    {word}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SplashScreen;
