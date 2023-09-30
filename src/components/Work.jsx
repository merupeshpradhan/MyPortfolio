import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/event.png";
import Img2 from "../assets/ecom.png";
import Img3 from "../assets/time.png";

const Work = () => {
  return (
    <div className="section " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 "
          >
            <div>
              <h2 className="h2 leading-tight text-accent font-semibold">
                My Latest <br />
                Project's
              </h2>
              <h5 className="  leading-tight text-yellow-300 font-semibold mb-1 underline">
                In my Projects I used  : 
              </h5>
              <p className="">
                <span className="font-semibold">Front-End Technologies : </span> HTML, CSS, JavaScript, React.js
              </p>
              <p className=" "><span className="font-semibold">Back-End Technologies : </span> Node.js</p>
              <p className=""><span className="font-semibold">Data Formats : </span>  MongoDB, JSON</p>
              <p className="mb-4"><span className="font-semibold">UI Frameworks/Libraries : </span> Bootstrap, Material-UI</p>
              <button className="btn btn-sm">View all Project</button>
            </div>
            <a href="https://merupeshpradhan.github.io/EventBooking.github.io/home.html">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">Only Frontend </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Event Booking</span>
              </div>
            </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 justify-end"
          >
           <a href="https://merupeshpradhan.github.io/Cartlane-Clone-Frontend/">
             {/* image */}
             <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">Full Responsive</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Ecomerce Website(Cartlene clone)</span>
              </div>
            </div>
           </a>
            {/* image */}
            <a href="https://merupeshpradhan.github.io/TimeTable.github.io/time.html">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">Personal</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Time Table</span>
              </div>
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
