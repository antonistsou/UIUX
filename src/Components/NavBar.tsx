import { motion } from "framer-motion"

interface Props {
    show: boolean;
}

const NavBar = ({ show }: Props) => {

    // console.log('Nav is shown', show)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className='fixed py-5 mt-5 shadow-lg left-1/2 transform -translate-x-1/2 z-10 flex justify-around items-center w-[90%] max-w-7xl backdrop-blur-sm rounded-3xl '>
                    <div className='text-3xl duration-700 transform hover:scale-125' onClick={() => {
                        window.location.reload();
                    }}>
                        <p>
                            <span className='inline-block text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text'>SoftLanding</span>
                        </p>
                    </div>
                </div>
            </motion.div >

        </>);
}

export default NavBar