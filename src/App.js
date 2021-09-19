import React, { useState } from "react";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Section from "./components/section";

function App() {
  const [group, setGroup] = useState(true);

  return (
    <React.Fragment>
      <Header />
      <main className="grid">
        <SideBar group={group} setGroup={setGroup} />
        <Section group={group} />
      </main>
    </React.Fragment>
  );
}

export default App;
