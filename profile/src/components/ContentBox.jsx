import React from "react";
import "../css/componentstyle.css";

const ContentBox = ({ title, children }) => {
  return (
    <div id="content_container">
      <div id="content_header">
        <h3 id="content_header_text">{title}</h3>
        <div id="content_header_underline"></div>
      </div>
      <div id="content_body">{children}</div>
    </div>
  );
};

export default ContentBox;
