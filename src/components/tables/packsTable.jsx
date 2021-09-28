import React, { useState } from "react";
import _ from "lodash";
import SearchBox from "../common/searchBox";
import Table from "../common/table/table";
import Pagination from "../common/pagination/pagination";
import { paginate } from "../../utils/paginate";
import { packs } from "../../data/packs.json";
import "./table-box.css";

function getPagedData(packs, currentPage, pageSize, sortColumn, searchQuery) {
  let filtered = packs;
  if (searchQuery)
    filtered = packs.filter((g) =>
      g.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const result = paginate(sorted, currentPage, pageSize);

  return { result, count: filtered.length };
}

const PacksTable = () => {
  const [currentPage, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [check, setCheck] = useState(false);
  const [checkArray, setCheckArray] = useState(
    new Array(packs.length).fill(false)
  );

  function handleAllCheck() {
    setCheckArray(new Array(packs.length).fill(!check));
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
    { path: "name", label: "PACK NAME", link1: true },
    { path: "owner", label: "PACK OWNER", link2: true },
    { path: "createdOn", label: "CREATED ON" },
    {
      label: "ACTIONS",
      content: () => <button className="btn btn--block">+ Join</button>,
      center: true,
    },
  ];
  const pageSize = 10;

  function debounce(func, time) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, time);
    };
  }

  const handleSearch = debounce(function (query) {
    setSearchQuery(query);
    setPage(1);
  }, 1000);

  const { result, count } = getPagedData(
    packs,
    currentPage,
    pageSize,
    sortColumn,
    searchQuery
  );

  return (
    <article className="table-box">
      <div className="table-box__heading">
        <h3>ALL PACKS</h3>
        <SearchBox
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Find a pack"
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

export default PacksTable;
