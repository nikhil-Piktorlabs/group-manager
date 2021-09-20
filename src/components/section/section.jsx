import React from "react";
import GroupsCarousel from "../carousels/groupsCarousel";
import GroupsTable from "../tables/groupsTable";
import { groups } from "../../data/groups.json";
import "./section.css";

const Section = () => {
  return (
    <section className="content">
      <h3>ALL GROUPS</h3>
      <hr />
      <GroupsCarousel data={groups} />
      <GroupsTable data={groups} />
    </section>
  );
};

export default Section;
