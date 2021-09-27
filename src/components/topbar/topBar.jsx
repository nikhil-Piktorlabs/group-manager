import React from "react";
import cloud from "../../images/cloud.png";
import person from "../../images/person.jpg";
import "./topbar.css";

const TopBar = ({ sideBar, setSideBar }) => {
  function handleSideBar() {
    if (sideBar) setSideBar(false);
    else setSideBar(true);
  }

  return (
    <header className="topbar grid__topbar">
      <div className="topbar__collapsible" onClick={() => handleSideBar()}>
        <i className="fa fa-bars fa-lg icon"></i>
      </div>
      <a className="topbar__link topbar__start" href="/">
        <img className='topbar__logo' src={cloud} alt="..." />
        <h2>
          CLOUD <span className="topbar__heading-access">ACCESS</span>
        </h2>
      </a>
      <ul className="topbar__end list list--inline">
        <li className="list__item">
          <a className="topbar__link" href="/">
            <div className="icon-filled">
              <i className="fa fa-bell-o fa-lg icon"></i>
            </div>
          </a>
        </li>
        <li className="list__item">
          <a className="topbar__link topbar__link--flex" href="/">
            <div className="topbar__user">
              <span className="topbar__user-name">John.Smith</span>
              <span className="topbar__user-network">T-Mobile USA</span>
            </div>
            <img className="topbar__user-image" src={person} alt="..." />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default TopBar;
