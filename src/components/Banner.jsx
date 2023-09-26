import React from "react";

import Image from "../assets/myimg4.png";
import { Link } from "react-scroll";
import resume from "../assets/resume.jpg"

import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";


const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              RUPESH <span>PRADHAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Editor",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-3 max-w-lg mx-auto lg:mx-0"
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-sm"><Link
            to="contact">Contact me</Link></button>
              <button className="btn btn-sm "><a href={resume} download={resume.jpg}> My Resume</a></button>
              
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/rupesh-pradhan-308621258/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/merupeshpradhan">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/mr_rupesh_._/">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/merupeshpradhan">
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[300px] border-2 border-white/50 rounded-xl "
          >
            <img src={Image} alt=""/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
