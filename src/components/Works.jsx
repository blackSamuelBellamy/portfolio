import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { netlify } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectoDescripcion } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 400,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={props.image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={netlify}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{props.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{props.description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {props.tags.map((tag) => (
            <p
              key={`${props.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projectos</p>
        <h2 className={styles.sectionHeadText}>Mis Actuales projectos</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {projectoDescripcion[0].text}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((x, i) => 
          <ProjectCard  
            key={`project${i}`} i
            index={i}
            {...x}
          />
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
