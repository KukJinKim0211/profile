import React from "react";
import "../css/pagestyle.css";

import IndexBox from "../components/IndexBox";
import ContentBox from "../components/ContentBox";

const FirstPage = () => {
  return (
    <div className="wrapper">
      <div className="left_index_right_content">
        <div className="box_index center_sort">
          <IndexBox titleNo="01" titleName="profile" />
        </div>
        <div className="box_content center_sort">
          <ContentBox />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
