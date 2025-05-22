<div ref={ref} className='flex h-screen align-middle bg-black xl:flex-row pt-36'>
    <div className=' basis-1/3'>
        <Lottie animationData={animationData}></Lottie>
    </div>
    <div className='basis-2/3'>
        <h2> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptatibus quam earum ratione molestias, quasi aliquam esse laboriosam quibusdam, laudantium sunt cum repellat eveniet, impedit dolor obcaecati iusto eaque quae?</h2>
    </div>
</div>

import { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import HeroComp from './Components/HeroComp';
import FirstScreen from './Components/FirstScreen';
import { useInView } from "react-intersection-observer";
import { tree } from 'next/dist/build/templates/app-page';
import SecondAnimationScreen from './Components/SecondAnimationScreen';
import { setTimeout } from 'timers/promises';
import ThirdTechScreen from './Components/ThirdTechScreen';

function App() {
    const [showNav, setShowNav] = useState(false);
    const firstScreenRef = useRef<HTMLDivElement>(null);
    const heroref = useRef<HTMLDivElement>(null);
    const heroInView = useRef(true); // track if HeroComp is visible

    const getVisibility = (inView: boolean) => {
        setShowNav(inView);
    };

    const { ref: heroInViewRef, inView } = useInView({
        threshold: 0.7, // trigger when 50% is visible
    });

    useEffect(() => {
        heroInView.current = inView;
    }, [inView]);

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (e.deltaY > 0 && heroInView.current) {
                e.preventDefault();
                firstScreenRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, []);

    return (
        <>
            <NavBar show={showNav} />
            <div ref={heroInViewRef}>
                <HeroComp />
            </div>
            <FirstScreen onViewChange={getVisibility} ref={firstScreenRef} />
            <SecondAnimationScreen></SecondAnimationScreen>
            <ThirdTechScreen></ThirdTechScreen>
        </>
    );
}

export default App;



import React, { forwardRef, useState } from 'react'
import { InView } from "react-intersection-observer";
import animationData from "../assets/lotties/Animation - 1744457895240.json"
import Lottie from 'lottie-react'

interface FirstScreenProps {
    onViewChange: (inView: boolean) => void;
}

const FirstScreen = forwardRef<HTMLDivElement, FirstScreenProps>(({ onViewChange }, ref) => {

    return (
        <InView as="div" onChange={(inView, entry) => onViewChange(inView)}>
            <div className='h-screen mt-20'>
                <div ref={ref} className='h-screen align-middle xl:flex xl:flex-row '>
                    <div className='flex items-center justify-center scale-75 basis-2/5'>
                        <Lottie animationData={animationData}></Lottie>
                    </div>
                    <div className="relative flex flex-col items-center justify-center px-10 text-center text-white basis-3/5">

                        <div className='text-white bg-opacity-50 border-8 rounded-md px-14 border-opacity-10 border-zinc-950 bg-zinc-950 py-28'>
                            <div className="absolute flex flex-row items-center justify-center space-x-1.5 -translate-y-20 -translate-x-5">
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            </div>
                            <h2 className="max-w-2xl text-2xl leading-relaxed"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptatibus quam earum ratione molestias, quasi aliquam esse laboriosam quibusdam, laudantium sunt cum repellat eveniet, impedit dolor obcaecati iusto eaque quae?</h2>
                        </div>
                    </div>

                </div>
            </div>
        </InView >

    );
});

export default FirstScreen;

import React, { forwardRef, useEffect, useRef } from 'react'
import videobg from '../assets/5409421_Coll_wavebreak_Globe_1280x720.mp4'
import { InView } from 'react-intersection-observer'

interface ScreenProps {
    onViewChange: (inView: boolean) => void;
}

const HeroComp = ({ onViewChange }: ScreenProps) => {

    return (
        <InView as="div" onChange={(inView, entry) => onViewChange(inView)}>
            <div className='h-screen'>
                <video id='video' src={videobg} autoPlay loop muted className='opacity-10'></video>
                <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>

                    <p className='text-6xl '>
                        Making projects <span className='text-cyan-700'> Land </span>
                        smooth and easy
                    </p>
                    <p className='pt-4 text-lg text-gray-400 '>
                        Software from the future
                    </p>
                </div>
            </div>
        </InView>
    );
}

export default HeroComp

import React from 'react';
import { motion } from "framer-motion"

interface Props {
    show: boolean;
}

const NavBar = ({ show }: Props) => {

    // console.log('Nav is shown', show)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='fixed top-3 left-1/2 transform -translate-x-1/2 z-50 flex justify-around items-center w-[90%] max-w-7xl py-4 bg-opacity-50   rounded-3xl backdrop-blur-sm'>

                    <div className='text-3xl duration-700 transform font-roboto hover:scale-125' onClick={() => console.log(window.screen.width)}>
                        <p>
                            <span className='font-bold text-indigo-400 '>
                                Soft
                            </span>
                            <span>
                                Landing
                            </span>
                        </p>
                    </div>
                    <div className='hidden text-3xl font-roboto md:flex' >
                        <p className='duration-700 transform hover:scale-125'>text </p>
                    </div>
                </div>
            </motion.div >

        </>);
}

export default NavBar



useEffect(() => {
    if (!zoomRef.current) return;
    gsap.to(zoomRef.current.querySelector("h2"), {
        scale: 1500,
        stagger: 1,
        duration: 3,
        ease: "none",
        scrollTrigger: {
            trigger: zoomRef2.current,
            start: "top top",
            end: `+=${window.innerHeight * 50}`,
            scrub: 1,
            pin: true
        }
    })

}, []);