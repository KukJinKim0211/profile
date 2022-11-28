import React from "react";
import "../css/componentstyle.css";

const IndexBox = ({ titleNo, titleName, type }) => {
  return (
    <div id="index_container">
      <div id="title_no">{titleNo}</div>
      <div id="title_line"></div>
      {type === 1 && (
        <div className="title_content" id="title_content_rotate1">
          {titleName}
        </div>
      )}
      {type === 2 && (
        <div className="title_content" id="title_content_rotate2">
          {titleName}
        </div>
      )}
    </div>
  );
};

export default IndexBox;
