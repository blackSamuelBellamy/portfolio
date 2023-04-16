import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <motion.p variants={fadeIn("", "", 1, 1)}>
          <span className={`${styles.sectionHeadText} block text-center mb-[100px]`}>
            Mis Habilidades
          </span>
        </motion.p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((x) => (
          <div className="w-28 h-28" key={x.name}>
            <BallCanvas icon={x.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
