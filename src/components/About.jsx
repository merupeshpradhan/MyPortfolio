import React from "react";

import Countup from "react-countup";

import { useState } from "react";

import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [isMaster, setIsMaster] = useState(false);
  const [isBachlor, setIsBachlor] = useState(false);
  const [isPlus2, setIsPlus2] = useState(false);

  const toggleMaster = () => {
    setIsMaster(!isMaster);
  };
  const toggleBachlor = () => {
    setIsBachlor(!isBachlor);
  };
  const togglePlus2 = () => {
    setIsPlus2(!isPlus2);
  };

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="text-2xl mb4 font-thin ">Name : Rupesh pradhan </h3>
            <h3 className=" mb4 font-thin ">
              Email : merupeshpradhan@gmail.com
            </h3>
            <h3 className=" mb4 font-thin ">Phone : 7327001410</h3>
            <h3 className="text-2xl font-medium underline ">Education</h3>
            <h3
              className="text-2xl font-medium   cursor-pointer  bg-white/50  p-2 rounded drop-shadow-md   mt-3 text-white flex justify-between"
              onClick={toggleMaster}
            >
              Master Degree in Computer Application{" "}
              <span className="ml-2">{isMaster ? "▼" : "▶"}</span>
            </h3>

            {isMaster && (
              <motion.div
                initial={isMaster ? "visible" : "hidden"}
                animate={isMaster ? "visible" : "hidden"}
                variants={{
                  visible: {
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 },
                  },
                  hidden: {
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                <p className="mb-3 bg-white/50 drop-shadow-md rounded p-2 ">
                 <span>College : </span> Silicon Institute of Technology,Bhubaneswar
                </p>
              </motion.div>
            )}
            <h3
              className="text-2xl font-medium  cursor-pointer  bg-white/50  p-2 rounded drop-shadow-md   mt-3 text-white flex justify-between"
              onClick={toggleBachlor}
            >
              Bachelor's Degree in Computer science<span className="ml-2">{isBachlor ? "▼" : "▶"}</span>
            </h3>
            {isBachlor && (
              <motion.div initial={isBachlor ? "visible" : "hidden"}
              animate={isBachlor ? "visible" : "hidden"}
              variants={{
                visible: {
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.3 },
                },
                hidden: {
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.3 },
                },
              }}>
                <p className="mb-3 bg-white/50 drop-shadow-md rounded p-2">
                <span>College : </span>government autonomous college angul
                </p>
              </motion.div>
            )}
            <h3
              className="text-2xl font-medium   cursor-pointer  bg-white/50  p-2 rounded drop-shadow-md w-[25vw] max-w-[30vw] mt-3 text-white flex justify-between"
              onClick={togglePlus2}
            >
              +2<span className="ml-2">{isPlus2 ? "▼" : "▶"}</span>
            </h3>
            {isPlus2 && (
              <motion.div initial={isPlus2 ? "visible" : "hidden"}
              animate={isPlus2 ? "visible" : "hidden"}
              variants={{
                visible: {
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.3 },
                },
                hidden: {
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.3 },
                },
              }}>
                <p className="mb-3 bg-white/50 drop-shadow-md rounded p-2">
                <span>College : </span> Sandilya College of Science,Sambalpur
                </p>
              </motion.div>
            )}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-6">
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
                  Personal
                  <br />
                  Project
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <Countup start={50} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  College and outside <br />
                  Project
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg "><Link to="contact">Contact me</Link></button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
