import React from "react";
import user from "../../images/user.png";
import groupLogo from "../../images/groupLogo.png";
import packLogo from "../../images/packLogo.png";
import _ from "lodash";

function renderCell(item, column) {
  if (column.content) return column.content;

  if (column.link1)
    return (
      <a className="a--primary" href="/">
        {_.get(item, column.path)}
      </a>
    );

  if (column.link2)
    return (
      <a className="a--secondary" href="/">
        {_.get(item, column.path)}
      </a>
    );

  return _.get(item, column.path);
}

function renderImage(column, group) {
  if (column.path === "owner") return <img src={user} alt="..." />;
  else if (column.path === "name")
    return <img src={group ? groupLogo : packLogo} alt="" />;
}

const TableBody = ({ data, columns, group }) => {
  return (
    <tbody className="table__body">
      {data.map((item) => (
        <tr className="table__row" key={item.id}>
          {columns.map((column, index) => (
            <td
              key={index}
              className={`table__cell${
                column.center ? " table__cell--center" : ""
              }`}
            >
              {renderImage(column, group)}
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
