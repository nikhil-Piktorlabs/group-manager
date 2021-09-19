import React from "react";
import Recommendations from "./recommendations";
import TableHolder from "./tableHolder";
import { groups } from "../data/groups.json";
import { packs } from "../data/packs.json";

const Section = ({ group }) => {
  const columns = [
    { path: "name", label: `${group ? "GROUP" : "PACK"} NAME`, link1: true },
    { path: "owner", label: `${group ? "GROUP" : "PACK"} OWNER`, link2: true },
    { path: "createdOn", label: "CREATED ON" },
    {
      label: "ACTIONS",
      content: <button className="btn btn--block">+ Join</button>,
      center: true,
    },
  ];

  return (
    <section className="content">
      <h3>ALL GROUPS</h3>
      <hr />
      <Recommendations data={groups} />
      <TableHolder
        group={group}
        data={group ? groups : packs}
        columns={columns}
      />
    </section>
  );
};

export default Section;
