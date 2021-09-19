import React from "react";
import groupLogo from "../images/groupLogo.png";
import packLogo from "../images/packLogo.png";

const SideBar = ({ group, setGroup }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__item">
        <h3>YOUR GROUPS/PACKS</h3>
        <p>You don't have access to anything yet</p>
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
        <p>You don't have any approvals yet</p>
      </div>
      <hr />
      <nav className="navigation">
        <div
          className={`navigation__item${
            group ? " navigation__item--active" : ""
          }`}
        >
          <img src={groupLogo} alt="..." />
          <span onClick={() => setGroup(true)}>ALL GROUPS</span>
        </div>
        <div
          className={`navigation__item${
            !group ? " navigation__item--active" : ""
          }`}
        >
          <img src={packLogo} alt="..." />
          <span onClick={() => setGroup(false)}>ALL PACKS</span>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
