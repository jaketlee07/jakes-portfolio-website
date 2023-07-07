import React from 'react';
//import {View, Image, StyleSheet} from 'react-native';


import { Headshot } from "../assets"



import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineCode
  } from "react-icons/ai";

function About() {
  return (
    <div className="text-center p-10 py-5">
        <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
            Jake Lee
        </h2>
        <h3 className="text-2xl py-2 text-white md:text-3xl">
            Aspiring Software Developer
        </h3>
        <p className="text-md py-4 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl"></p>
        <div className="text-5xl flex justify-center gap-16 py-2 text-gray-200">
            <a href = "https://github.com/jaketlee07">
                <AiFillGithub />
            </a>
                
            <a href = "https://www.linkedin.com/in/jake-lee-065143239/">
                <AiFillLinkedin />
            </a>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-70 h-70 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src={Headshot} className="h-full w-full object-cover" style={{ marginRight: '50px' }} /> 
        </div>

        <div>
        <h3 className="text-3xl font-semibold pt-10 py-1 text-white ">A Little About Me</h3>
        <p className="text-lg py-2 leading-8 text-gray-100">
            I am a student at Boston University studying Computer Engineering with a concentration
            in Machine Learning aspiring to work as a Software Engineer. 
        
        </p>
        </div>
    </div>
  )
}

export default About