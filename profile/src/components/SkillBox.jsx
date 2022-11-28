import React from "react";
import "../css/componentstyle.css";
import Skill from "./Skill";

const SkillBox = ({ data }) => {
  return (
    <div id="skill_box">
      {data.map((d, index) => (
        <Skill data={d} key={index} />
      ))}
    </div>
  );
};

export default SkillBox;
