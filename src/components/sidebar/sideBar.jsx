import React from "react";
import groupLogo from "../../images/groupLogo.png";
import packLogo from "../../images/packLogo.png";
import "./sidebar.css";
import "./navigation.css";

const SideBar = ({ sideBar }) => {
  console.log(window.location.pathname);
  return (
    <aside className={`sidebar${sideBar ? " sidebar--expanded" : ""}`}>
      <div className="sidebar__item">
        <h3>YOUR GROUPS/PACKS</h3>
        <p className="sidebar__message">
          You don't have access to anything yet
        </p>
      </div>
      <hr />
      <div className="sidebar__item">
        <h3>YOUR REQUESTS</h3>
        <ul className="list">
          <li className="list__request">
            <span>Pending</span>
            <span className="badge badge--primary">6</span>
          </li>
          <li className="list__request list__request--not-selected">
            <span>Approved</span>
            <span className="badge badge--secondary">0</span>
          </li>
          <li className="list__request list__request--not-selected">
            <span>Rejected</span>
            <span className="badge badge--secondary">0</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="sidebar__item">
        <h3>YOUR APPROVALS</h3>
        <p className="sidebar__message">You don't have any approvals yet</p>
      </div>
      <hr />
      <nav className="navigation">
        <a
          href="/"
          className={`navigation__item${
            window.location.pathname === "/" ? " navigation__item--active" : ""
          }`}
        >
          <img className="navigation__image" src={groupLogo} alt="..." />
          <span className="navigation__text">ALL GROUPS</span>
        </a>
        <a
          href="/packs"
          className={`navigation__item${
            window.location.pathname === "/packs"
              ? " navigation__item--active"
              : ""
          }`}
        >
          <img className="navigation__image" src={packLogo} alt="..." />
          <span className="navigation__text">ALL PACKS</span>
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
