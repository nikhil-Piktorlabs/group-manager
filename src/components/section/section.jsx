import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupsCarousel from "../carousels/groupsCarousel";
import GroupsTable from "../tables/groupsTable";
import PacksTable from "../tables/packsTable";
import { groups } from "../../data/groups.json";
import "./section.css";

const Section = () => {
  return (
    <section className="content">
      <h3>ALL GROUPS</h3>
      <hr />
      <GroupsCarousel data={groups} />
      <Switch>
        <Route path="/packs" component={PacksTable} />
        <Route path="/" component={GroupsTable} />
      </Switch>
    </section>
  );
};

export default Section;
