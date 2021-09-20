import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <header className="topbar grid__topbar">
      <a className="topbar__link" href="/">
        <h2>
          CLOUD <span style={{ color: "#3e3e3e" }}>ACCESS</span>
        </h2>
      </a>
      <ul className="list list--inline">
        <li className="list__item">
          <a className="topbar__link" href="/">
            <div className="icon-filled">
              <i className="fa fa-bell-o fa-lg icon"></i>
            </div>
          </a>
        </li>
        <li className="list__item">
          <a className="topbar__link" href="/">
            <div className="topbar__user">
              <span className="topbar__user-name">John.Smith</span>
              <span className="topbar__user-network">T-Mobile USA</span>
            </div>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
