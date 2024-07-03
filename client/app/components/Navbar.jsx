"use client";

import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [width, setWidth] = useState("w-[50px]");

  const displayNav = async () => {
    if (toggle == false) {
      setToggle(true);
      setWidth("w-[300px]");
    }else{
        setToggle(false);
      setWidth("w-[50px]");

    }
  };

  return (
    <div
    //   onClick={displayNav}
      className={`flex-col bg-red-500 hover:cursor-pointer  h-[100vh] z-50 ${width} `}
    >
      <span onClick={displayNav} className=" left-[10px] p-2 absolute">x</span>
    </div>
  );
};

export default Navbar;
