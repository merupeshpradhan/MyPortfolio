import React from "react";

import Logo from "../assets/mylogo2.png";

const Header = () => {
  return (
    <header className=" py-5 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="logo" className="w-12"/>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
