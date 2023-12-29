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
    <div className="flex justify-center flex-row mb-20">
      <div className="flex-1 flex flex-col h-full mt-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let&apos;s work together to bring your
          ideas to life!
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
      <div className="flex-1 flex justify-start">
        <div className="w-full relative">
          <MeCanvas />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
