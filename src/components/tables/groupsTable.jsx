import React, { useEffect, useState } from "react";
import _ from "lodash";
import SearchBox from "../common/searchBox";
import Table from "../common/table/table";
import Pagination from "../common/pagination/pagination";
import { paginate } from "../../utils/paginate";
import { groups } from "../../data/groups.json";
import "./table-box.css";

function getPagedData(groups, currentPage, pageSize, sortColumn, searchQuery) {
  let filtered = groups;
  if (searchQuery)
    filtered = groups.filter((g) =>
      g.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const result = paginate(sorted, currentPage, pageSize);

  return { result, count: filtered.length };
}

const GroupsTable = () => {
  const [currentPage, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      label: <input type="checkbox" />,
      content: <input type="checkbox" />,
      checkbox: true, center: true
    },
    { path: "name", label: "GROUP NAME", link1: true },
    { path: "owner", label: "GROUP OWNER", link2: true },
    { path: "createdOn", label: "CREATED ON" },
    {
      label: "ACTIONS",
      content: <button className="btn btn--block">+ Join</button>,
      center: true,
    },
  ];

  useEffect(()=>{
    const height = document.body.querySelector('.table-box__table').clientHeight;
    console.log(height)
    if(height> 465)
      setPageSize(18);
      else
      setPageSize(10);
  },[])

  function handleSearch(query) {
    setSearchQuery(query);
    setPage(1);
  }

  const { result, count } = getPagedData(
    groups,
    currentPage,
    pageSize,
    sortColumn,
    searchQuery
  );

  return (
    <article className="table-box">
      <div className="table-box__heading">
        <h3>ALL GROUPS</h3>
        <SearchBox
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Find a group"
        />
      </div>
      <div className="table-box__table">
        <Table
          data={result}
          columns={columns}
          sortColumn={sortColumn}
          onSort={setSortColumn}
        />
      </div>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </article>
  );
};

export default GroupsTable;
