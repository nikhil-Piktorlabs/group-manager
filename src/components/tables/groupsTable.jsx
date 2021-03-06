import React, { useState } from "react";
import _ from "lodash";
import SearchBox from "../common/searchBox";
import Table from "../common/table/table";
import Pagination from "../common/pagination/pagination";
import { paginate } from "../../utils/paginate";
import { debounce } from "../../utils/debounce";
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
  const [check, setCheck] = useState(false);
  const [checkArray, setCheckArray] = useState(
    new Array(groups.length).fill(false)
  );

  function handleAllCheck() {
    setCheckArray(new Array(groups.length).fill(!check));
    setCheck((c) => !c);
  }

  function handleSingleCheck(i) {
    let newArray = [...checkArray];
    newArray[i] = !checkArray[i];
    setCheckArray(newArray);
  }

  const columns = [
    {
      label: (
        <input
          className="checkbox"
          type="checkbox"
          checked={check}
          onChange={() => handleAllCheck()}
        />
      ),
      content: (i) => (
        <input
          className="checkbox"
          type="checkbox"
          checked={checkArray[i]}
          onChange={() => handleSingleCheck(i)}
        />
      ),
      checkbox: true,
      center: true,
    },
    { path: "name", label: "GROUP NAME", link1: true },
    { path: "owner", label: "GROUP OWNER", link2: true },
    { path: "createdOn", label: "CREATED ON" },
    {
      label: "ACTIONS",
      content: (i) => <button className="btn btn--block">+ Join</button>,
      center: true,
    },
  ];

  const pageSize = 10;

  const handleSearch = debounce(function (query) {
    setSearchQuery(query);
    setPage(1);
  }, 1000);

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
        <SearchBox onChange={handleSearch} placeholder="Find a group" />
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
