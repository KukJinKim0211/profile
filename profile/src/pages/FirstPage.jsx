import React from "react";
import "../css/pagestyle.css";

import IndexBox from "../components/IndexBox";
import ContentBox from "../components/ContentBox";

const FirstPage = () => {
  return (
    <div className="wrapper">
      <div className="left_index_right_content">
        <div className="box_index center_sort">
          <IndexBox titleNo="01" titleName="profile" type={1} />
        </div>
        <div className="box_content center_sort">
          <ContentBox title="PROFILE">
            <div>
              <div>
                <h3 className="content_title_text">
                  안녕하세요
                  <br />
                  프론트엔드개발자
                  <br />
                  <br />
                  김국진입니다.
                </h3>
              </div>
            </div>
          </ContentBox>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
