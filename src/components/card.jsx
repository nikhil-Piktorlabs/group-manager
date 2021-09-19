import React from "react";
import gl from "../images/groupLogo.png";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={gl} alt="..." className="card__image" />
      <div className="card__info">
        <span style={{ fontWeight: "bold" }}>{item.name}</span>
        <span style={{ fontSize: "1.1rem", opacity: "0.5" }}>{item.owner}</span>
      </div>
      <button className="btn btn--circle">
        <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Card;
