import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences, experienceHead } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full grid place-items-center cursor-pointer">
          <a 
            href={experience.certificate} 
            target="_blank"
            rel="noopener noreferer"
            className="grid place-items-center"
          >
          <img
            src={experience.icon}
            alt={experience.content}
            className="w-[90%] h-[90%] object-contain rounded-full"
          />
          </a>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">{experience.content}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((x, i) => (
          <li
            key={'experiencie-point' + i}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {x}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{experienceHead[0].header}</p>
        <h2 className={styles.sectionHeadText}>{experienceHead[0].title}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((x, i) => (
            <ExperienceCard key={i} experience={x} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
