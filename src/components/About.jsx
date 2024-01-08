import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { MeCanvas } from "./canvas";
import { useState, useTransition } from "react";

import { tabs_about } from "../constants";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-[#915eff]"
    : "text-secondary";

  return (
    <button onClick={() => selectTab(children)}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };
  return (
    <div className="flex justify-center flex-row mb-20" id="about">
      <div className="flex-1 flex flex-col h-full mt-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am a seasoned software engineer with over 12 years of dedicated experience specializing in frontend development for web applications. A perpetual learner, I am enthusiastic about staying abreast of the latest technologies, consistently updating my skill set. <br /><br />

My primary expertise lies in frontend development. Additionally, I possess proficiency in backend technologies, particularly in ExpressJS, NodeJS, and MongoDB. <br /><br />

Passionate about enhancing user experience, I thrive in the dynamic intersection of technology and design.
        </motion.p>

        <div className="mt-10 ">
          <TabButton
            active={tab === "skills"}
            selectTab={() => handleTabChange("skills")}
          >
            Skills
          </TabButton>
          <TabButton
            active={tab === "education"}
            selectTab={() => handleTabChange("education")}
          >
            Education
          </TabButton>
        </div>
        <div className="mt-5">
          {tabs_about[tab].map((item, index) => (
            <div key={index}>
              <p className="text-secondary text-[15px] font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 sm:flex justify-start hidden">
        <div className="w-full relative">
          <MeCanvas />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "");
