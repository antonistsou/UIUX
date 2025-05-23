import React, { useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    const [className, setClassName] = useState("");
    const [innerText, setInnerText] = useState("Contact");

    const ref = useRef<HTMLButtonElement>(null);


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setClassName("animate-fadeOut");

        if (ref.current) { }
        setTimeout(() => {
            ref.current?.setAttribute("disabled", "disabled");

            setClassName("animate-fadeIn selectable");
            setInnerText("atantoniotsou@gmail.com");
        }, 1000);
    }

    return (
        <>
            <div className='relative bottom-0 '>
                <hr className='h-px border-0 dark:bg-gray-700'></hr>
                <div className="flex justify-between w-full text-lg bg-black h-fit sm:flex-col sm:items-center md:flex-row sm:gap-y-5">
                    <p className='flex items-center justify-start md:pl-5 text-md sm:pt-5'>   &copy; {new Date().getFullYear()}</p>
                    {/* <div className="flex items-end"> */}
                    <button onClick={handleClick} className={className} ref={ref}> {innerText} </button>
                    <a href='https://github.com/antonistsou'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='flex items-center md:pr-5 sm:pb-5 '
                    >
                        <FaGithub> </FaGithub>
                    </a>
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Footer