import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>关于我</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-se
       text-[17px] max-w-3xl leading-[30px]"
      >
        我是一名即将毕业于中山大学数学学院统计学的学生，在过去几年里，我对编程与设计产生了深厚的热爱，因此如今我的志向是成为一名前端Web开发工程师。
        在技术方面，我熟悉HTML、CSS、JavaScript等网页开发语言，并能够在实践中熟练应用React等框架，搭建高质量的网页应用。
        除此之外，我也还熟悉一些后端语言如Java，并熟悉MySQL数据库的使用。我喜欢编写高效且易于维护的代码。
        我对前端技术和用户体验有着浓厚的兴趣，一直在不断学习和探索新的技术，以提高自己的能力和技能。
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
