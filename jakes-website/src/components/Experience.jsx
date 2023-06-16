import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
//import { motion } from "framer-motion";

import { BostonHacks, ThetaTau } from "../assets";


import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
const experiences = [
    {
      date: "February 2023 - Present",
      iconBg: "#232631",
      icon: BostonHacks,
      title: "Tech Team",
      company_name: "Boston Hacks",
      points: ["Worked in a team of 10 to develop and deploy a successful hackathon website and registration portal for management of 500+ applications for the upcoming hackathon", "Partnered closely with the design team to ensure that the hackathon website and registration portal were visually appealing, intuitive, and consistent with the event's theme and messaging"],
    },
    {
      date: "January 2023 - May 2023",
      iconBg: "#232631",
      icon: ThetaTau,
      title: "Website Chair",
      company_name: "Theta Tau Psi Delta",
      points: ["Oversaw the development of a new professional fraternity website from ideation to launch, resulting in a 50% increase in website traffic and 25% increase in membership inquiries", "Utilized Django as the primary database framework for data management and seamless integration with website features"],
    },
    // Add more experience objects as needed
    // max 3 points
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
        <div className="flex object-fill justify-center items-center w-full h-full">
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
      <div className="mt-20 flex flex-col">

        <p className="text-white font-black sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            What I Have Done Before
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] pb-5">
            Work Experience.
        </h3>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
  );
};

export default Experience;
//export default SectionWrapper(Experience, "work");