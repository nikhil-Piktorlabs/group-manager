import React from "react";
import "./card.css";
import groupLogo from "../../images/groupLogo.png";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={groupLogo} alt="..." className="card__image" />
      <div className="card__info">
        <span className="card__text card__text--primary">{item.name}</span>
        <span className="card__text card__text--secondary">{item.owner}</span>
      </div>
      <button className="btn btn--circle">
        <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Card;
