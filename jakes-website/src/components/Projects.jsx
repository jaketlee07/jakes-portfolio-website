import React from 'react';
import { MealMe, Website} from "../assets";


//import Tilt from "react-tilt";
//import { motion } from "framer-motion";
//import { projects } from "/Users/jakelee/Documents/GitHub/jakes-website/src/constants";
//import { fadeIn, textVariant } from "../utils/motion";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCode
} from "react-icons/ai";

// info to be put onto the cards
const projects = [
    {
      index: 1,
      name: "MealME",
      description: "Do you ever not know where to go eat? Use MealME to get matched with the perfect recommendation by going through tinder inspired resturant cards.",
      tags: [
        { name: "React", color: "text-red-500" },
        { name: "Javacript", color: "text-blue-500" },
        { name: "YelpAPI", color: "text-blue-500" },
      ],
      image: MealMe,
      source_code_link: "https://github.com/jaketlee07/MEALME-Tinder-For-Food",
    },
    {
      index: 2,
      name: "jaketlee.tech",
      description: "My personal website to showcase my skills and projects.",
      tags: [
        { name: "React", color: "text-green-500" },
        { name: "Tailwind", color: "text-purple-500" },
        { name: "Javascript", color: "text-purple-500" },
      ],
      image: Website,
      source_code_link: "https://github.com/jaketlee07/jakes-portfolio-website",
    },
    // Add more project objects as needed
  ];

//build of the card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="bg-cyan-950 p-5 rounded-2xl sm:w-[300px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-end items-start cursor-pointer"
            >
             <AiFillGithub className="w-3/4 h-3/4 object-contain"/>
              
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-200 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
   </div>
  );
};

//Output onto the project section of the website
function Projects() {
  return (
    <section className="py-10">
    <div>
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h3>
      <p className="text-xl py-2 font-bold leading-8 text-white">
        Since the begining of my Programming journey I have taken part in a wide 
        range of projects
      </p>
      <p className="text-xl py-2 font-bold leading-8 text-white">
        Here are some of the projects that I've done
      </p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project) => (
        <ProjectCard
          key={project.index}
          index={project.index}
          name={project.name}
          description={project.description}
          tags={project.tags}
          image={project.image}
          source_code_link={project.source_code_link}
        />
      ))}
    </div>   
  </section>
  )
}

export default Projects