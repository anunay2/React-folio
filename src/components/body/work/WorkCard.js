import React from "react";
import "./WorkCard.css";

function WorkCard({ item }) {
  return (
    <div className="work__card">
      <img src={item?.companyLogo} alt="abc" className="work__logo" />
      <div className="work__info">
        <label className="company__name">
          <b>{item?.company}</b>
        </label>
        <div className="work__dates">
          <label>
            {item?.dataJoining} - {item?.dateEnd}
          </label>
        </div>
        <div className="work__desc">
          {item.work.map((bullets) => {
           return ( bullets.point )
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
