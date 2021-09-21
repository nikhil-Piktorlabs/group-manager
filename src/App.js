import React, { useState } from "react";
import TopBar from "./components/topbar/topBar";
import SideBar from "./components/sidebar/sideBar";
import Section from "./components/section/section";

function App() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="grid grid--main">
      <TopBar sideBar={sideBar} setSideBar={setSideBar} />
      <SideBar sideBar={sideBar} />
      <Section />
    </div>
  );
}

export default App;
