import React from "react";

import Countup from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb4">I'm a Fresher in FullStack Developer </h3>
            <p className="mb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <Countup start={50} end={0} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Exprience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <Countup start={50} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                   Personal<br />
                   Project
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <Countup start={50} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  College and outside <br />
                  Project
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                my Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
