import React from "react";
import "../css/pagestyle.css";

import IndexBox from "../components/IndexBox";
import ContentBox from "../components/ContentBox";
import SkillBox from "../components/SkillBox";

const ThirdPage = () => {
  const skillData = [
    {
      img: require("../img/html.png"),
    },
    {
      img: require("../img/css.png"),
    },
    {
      img: require("../img/javascript.png"),
    },
    {
      img: require("../img/typescript.png"),
    },
    {
      img: require("../img/react.png"),
    },
    {
      img: require("../img/vue.png"),
    },
  ];
  return (
    <div className="wrapper">
      <div className="left_index_right_content">
        <div className="box_index center_sort">
          <IndexBox titleNo="03" titleName="skills" type={1} />
        </div>
        <div className="box_content center_sort">
          <ContentBox title="SKILLS">
            <SkillBox data={skillData} />
          </ContentBox>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
