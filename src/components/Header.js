import React from "react";

import Logo from "../assets/mylogo.png";

const Header = () => {
  return (
    <header className=" py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="w-9"/>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  )
};

export default Header;
