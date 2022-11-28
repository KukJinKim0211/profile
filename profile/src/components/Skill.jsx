import React from "react";
import "../css/componentstyle.css";
import HTML from "../img/html.png";

const Skill = ({ data }) => {
  return (
    <div className="skill_box">
      <img id="back_image" src={data.img} />
    </div>
  );
};

export default Skill;
