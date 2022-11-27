import React from "react";
import "../css/componentstyle.css";

const IndexBox = ({ titleNo, titleName }) => {
  return (
    <div id="index_container">
      <div id="title_no">{titleNo}</div>
      <div id="title_line"></div>
      <div id="title_content">{titleName}</div>
    </div>
  );
};

export default IndexBox;
