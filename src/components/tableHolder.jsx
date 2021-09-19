import React, { useEffect, useState } from "react";
import SearchBox from "./common/searchBox";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";

function getPagedData(data, currentPage, pageSize, sortColumn, searchQuery) {
  let filtered = data;
  if (searchQuery)
    filtered = data.filter((g) =>
      g.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const result = paginate(sorted, currentPage, pageSize);

  return { result, count: filtered.length };
}

const TableHolder = ({ data, columns, group }) => {
  const [currentPage, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");

  const pageSize = 10;

  function handleSearch(query) {
    setSearchQuery(query);
    setPage(1);
  }

  const { result, count } = getPagedData(
    data,
    currentPage,
    pageSize,
    sortColumn,
    searchQuery
  );

  useEffect(() => {
    setPage(1);
  }, [group]);

  return (
    <article className="table-card">
      <header className="table-card__heading">
        <h3>{group ? "ALL GROUPS" : "ALL PACKS"}</h3>
        <SearchBox value={searchQuery} onChange={handleSearch} group={group} />
      </header>
      <Table
        data={result}
        columns={columns}
        sortColumn={sortColumn}
        onSort={setSortColumn}
        group={group}
      />
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </article>
  );
};

export default TableHolder;
