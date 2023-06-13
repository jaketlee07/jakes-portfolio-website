import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
//import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
const experiences = [
    {
      date: "2020-2021",
      iconBg: "#232631",
      icon: "/path/to/image1.jpg",
      title: "Experience 1",
      company_name: "Company 1",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    {
      date: "2019-2020",
      iconBg: "#232631",
      icon: "/path/to/image2.jpg",
      title: "Experience 2",
      company_name: "Company 2",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    // Add more experience objects as needed
  ];


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");