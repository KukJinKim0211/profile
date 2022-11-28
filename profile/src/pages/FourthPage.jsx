import React from "react";
import "../css/pagestyle.css";

import IndexBox from "../components/IndexBox";
import ContentBox from "../components/ContentBox";

const FourthPage = () => {
  return (
    <div className="wrapper">
      <div className="left_index_right_content">
        <div className="box_content center_sort">
          <ContentBox title="PROJECT" />
        </div>
        <div className="box_index center_sort">
          <IndexBox titleNo="04" titleName="project" type={2} />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
