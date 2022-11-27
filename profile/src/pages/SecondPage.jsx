import React from "react";
import "../css/pagestyle.css";

import IndexBox from "../components/IndexBox";
import ContentBox from "../components/ContentBox";

const SecondPage = () => {
  return (
    <div className="wrapper">
      <div className="left_index_right_content">
        <div className="box_content center_sort">
          <ContentBox />
        </div>
        <div className="box_index center_sort">
          <IndexBox titleNo="02" titleName="연혁" />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
