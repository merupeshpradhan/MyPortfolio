import React from "react";


import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Programming Languages",
    description:
      "Proficiency in one or more programming languages is fundamental. Common languages include JavaScript, Java, C, C++, Python and PHP.",
  },
  {
    name: "Front-End Development",
    description:
      "Knowledge of front-end technologies like HTML, CSS, and JavaScript, as well as popular libraries and frameworks like React, Angular, or Vue.js.",
  },
  {
    name: "Back-End Development",
    description:
      "Expertise in server-side programming, handling requests, managing databases, and building scalable and secure back-end systems",
  },
  {
    name: "Problem-Solving",
    description:
      "The ability to analyze complex problems, break them down into smaller components, and develop effective solutions is essential for both roles.",
  },
  {
    name: "Version Control",
    description:
      " Knowledge of version control systems like Git and using Git repositories for collaborative development and tracking changes.",
  },
  {
    name: "Software Development Life Cycle (SDLC)",
    description:
      "Familiarity with various phases of the SDLC, including requirements analysis, design, development, testing, deployment, and maintenance.",
  },
  {
    name: "User Interface (UI) and User Experience (UX) Design",
    description:
      "A basic understanding of UI/UX principles to create user-friendly interfaces.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-center  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6 ">What I Know </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Fresher in FullStack Developer
            </h3>
            <button className="btn btn-sm ">See my Work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className=" max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
