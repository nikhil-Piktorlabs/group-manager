import React from "react";

const Header = () => {
  return (
    <header className="topbar">
      <a href="/">
        <h2>
          CLOUD <span style={{ color: "#3e3e3e" }}>ACCESS</span>
        </h2>
      </a>
      <ul className="list list--inline">
        <li className="list__item">
          <a href="/">
            <div className="icon-filled">
              <i className="fa fa-bell-o fa-lg icon"></i>
            </div>
          </a>
        </li>
        <li className="list__item">
          <a href="/">
            <div className="user">
              <span className="user__name">John.Smith</span>
              <span className="user__netowrk">T-Mobile USA</span>
            </div>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
