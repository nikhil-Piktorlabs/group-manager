import React from "react";
import "./card.css";
import groupLogo from "../../images/groupLogo.png";
import plusIcon from "../../images/plus.png";

const Card = ({ item, scroll }) => {
  return (
    <div className="card">
      <img src={groupLogo} alt="..." className="card__image" />
      <div className="card__info">
        <span className="card__text card__text--primary">{item.name}</span>
        <span className="card__text card__text--secondary">{item.owner}</span>
      </div>
      <img className="btn btn--image" src={plusIcon} alt="..." />
    </div>
  );
};

export default Card;
