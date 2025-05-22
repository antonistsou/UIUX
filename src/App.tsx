import { useEffect, useRef, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import HeroComp from './Components/HeroComp';
import FirstScreen from './Components/FirstScreen';
import { useInView } from "react-intersection-observer";
import ThirdTechScreen from './Components/ThirdTechScreen';
import Footer from './Components/Footer';
import ZoomInScreen from './Components/ZoomInfiles/ZoomInScreen';
import AfterZoom from './Components/ZoomInfiles/AfterZoom';
import SplashScreen from './Components/SplashScreen';
import { motion } from 'framer-motion';

function App() {
  const [showNav, setShowNav] = useState(false);
  const firstScreenRef = useRef<HTMLDivElement>(null);
  const heroInView = useRef(true); // track if HeroComp is visible
  const [loading, setLoading] = useState(false);
  const delay = 3000; //ms

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, delay)
  }, [])

  //nav visibility
  const getVisibility = (inView: boolean) => {
    setShowNav(!inView);
  };

  const { ref: heroInViewRef, inView } = useInView({
    threshold: 0.1, // trigger when 70% is visible
  });


  //scroll action
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
      {loading ?
        <SplashScreen delay={delay} />
        :
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={
              { opacity: 1 }
            }
          >
            <NavBar show={showNav} />
            <div ref={heroInViewRef} >
              <HeroComp onViewChange={getVisibility} />
            </div>
            <FirstScreen ref={firstScreenRef} />
            <ZoomInScreen></ZoomInScreen>
            <AfterZoom></AfterZoom>
            <ThirdTechScreen></ThirdTechScreen>
            {/* <TryGrid></TryGrid> */}
            <Footer></Footer>
          </motion.div>
        </>
      }
    </>
  );
}

export default App;
