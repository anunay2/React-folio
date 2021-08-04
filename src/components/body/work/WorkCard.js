import React from "react";
import Bullets from "./Bullets";
import "./WorkCard.css";

function WorkCard({ item }) {
  return (
    <div className="work__card">
      <img src={item?.companyLogo} alt="abc" className="work__logo" />
      <div className="work__info">
        <label className="company__name">
          <b>{item?.company}</b>
        </label>
        <div className="company__role">
          <a href={item.link}>{item?.designation}</a>
        </div>
        <div className="work__dates">
          <label>
            {item?.dataJoining} - {item?.dateEnd}
          </label>
        </div>
        <div className="work__desc">{item.work.map((bullets) => {
          return(
            <Bullets bullets={bullets}/>
          )
        })}</div>
      </div>
    </div>
  );
}

export default WorkCard;
