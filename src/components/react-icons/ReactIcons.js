import React from "react";
import { IconContext } from "react-icons";
import { AiFillAppstore } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "green", size: "5rem" }}>
      <div>
        <FaReact color="blue" size="6rem"></FaReact>
        <AiFillAppstore color="purple"></AiFillAppstore>
      </div>
    </IconContext.Provider>
  );
};

export default Icons;
