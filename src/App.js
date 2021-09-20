import React from "react";
import TopBar from "./components/topbar/topBar";
import SideBar from "./components/sidebar/sideBar";
import Section from "./components/section/section";

function App() {
  return (
    <div className="grid grid--main">
      <TopBar />
      <SideBar />
      <Section />
    </div>
  );
}

export default App;
