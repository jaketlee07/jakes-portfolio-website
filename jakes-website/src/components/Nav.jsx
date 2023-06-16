import React from 'react'

import { BsFillMoonStarsFill } from "react-icons/bs";

import { useState } from "react";
import Resume from "/Users/jakelee/Documents/GitHub/jakes-portfolio-website/jakes-website/src/assets/Jake's_Resume.pdf";


function Nav() {
    // const [dark, setDark] = useState(false);
    // // const formRef = useRef();

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('public/jake_lee_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = Resume;
                alink.download = Resume;
                alink.click();
            })
        })
    }


    return (
    // <div className={dark ? "dark" : ""}>
        
        <main className=" lg:px-20 flex-1" >

                <nav className="py-10 mb-12 flex justify-between text-white">
                    <h1 className="font-bold text-2xl">jaketlee.tech</h1>
                <ul className="flex items-center">
                    <li>
                    {/* <BsFillMoonStarsFill
                        onClick={() => setDark(!dark)}
                        className=" cursor-pointer text-2xl"
                    /> */}
                    </li>
                    <li>
                    <button
                        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        onClick={onButtonClick}
                    >
                        Resume
                    </button>
                    </li>
                </ul>
                </nav>
        </main>
    // </div>
  );
};

export default Nav;