import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

import { useState,useEffect } from "react";

import { Link } from "react-scroll";

const Nav = () => {

  const [banner, setBanner] = useState(-200);
  const [service, setService] = useState(-150);    
  const [about, setAbout] = useState(-150);    
  const [work, setWork] = useState(-150);    
  const [contact, setContact] = useState(-150);    

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBanner(-200); 
        setService(200);
        setAbout(180);
        setWork(200);
        setContact(199);
      } else {
        setBanner(-250);
        setService(180);
        setAbout(0);
        setWork(180);
        setContact(185)
      }
      
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="fixed bottom-2  lg:bottom-8 w-full overflow-hidden z-50 ">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] items-center backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={banner}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={about}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={service}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={work}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={contact}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
