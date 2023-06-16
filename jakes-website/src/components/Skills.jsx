import React from 'react'
//import {View, Image, StyleSheet} from 'react-native';

import code from "/Users/jakelee/Documents/GitHub/jakes-portfolio-website/jakes-website/src/assets/code.png";
import program from "/Users/jakelee/Documents/GitHub/jakes-portfolio-website/jakes-website/src/assets/program.png";

function Skills() {
  return (
    <section>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pb-5">
            Relevant Skills and Courses.
        </h3>
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <img src={program} width={100} height={100} />
        <h4 className="py-3 text-teal-600 text-xl">Programming Languages</h4>
        <p className="text-gray-800 py-1">C</p>
        <p className="text-gray-800 py-1">C++</p>
        <p className="text-gray-800 py-1">Java</p>
        <p className="text-gray-800 py-1">Javascript</p>
        <p className="text-gray-800 py-1">Python</p>
        <p className="text-gray-800 py-1">MATLAB</p>
      </div>
      <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <img src={code} width={100} height={100} />
        <h4 className="py-3 text-teal-600 text-xl text-center">Relevant Coursework</h4>
        <p className="text-gray-800 py-1">EC444 Smart and Connected Systems</p>
        <p className="text-gray-800 py-1">EC330 Applied Algorithms</p>
        <p className="text-gray-800 py-1">EC327 Introduction to Software Engineering</p>
        <p className="text-gray-800 py-1">MA193 Discrete Mathematics for Engineering</p>
        <p className="text-gray-800 py-1">EK381 Probability, Statistics, and Data Science for Engineers</p>
        <p className="text-gray-800 py-1">EK103 Computational Linear Algebra</p>
        

      </div>
      {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={tools} width={150} height={150} />
        <h3 className="text-lg font-medium pt-8 pb-2 ">Programming Tools</h3>
        <p className="py-2">
          Are you interested in feedback for your current project? I can
          give you tips and tricks to level it up.
        </p>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p className="text-gray-800 py-1">Illustrator</p>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Indesign</p>
      </div> */}
    </div>
  </section>
  )
}

export default Skills