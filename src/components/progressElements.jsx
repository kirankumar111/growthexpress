import React from "react";
import contentDict from "../config/dynamicData";

const ProgressElements = () => {
  let ProgressDiv = contentDict.progressElements.map((item,index) => {
    return (
      <div className="row wow fadeInUp" key={index}>
        <div className="col-sm-6 col-md-6">
          <div className="skill">
            <h4>{item.skillName}</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: 0 }}
              >
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div id="progress-elements">
      <div id="team-members" className="owl-carousel owl-theme">
        {ProgressDiv}
      </div>
    </div>
  );
}

export default ProgressElements