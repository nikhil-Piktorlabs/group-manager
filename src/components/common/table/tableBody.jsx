import React from "react";
import _ from "lodash";
import user from "../../../images/user.png";
import groupLogo from "../../../images/groupLogo.png";
import packLogo from "../../../images/packLogo.png";

function renderCell(item, column, index) {
  if (column.content) return column.content(index);

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

function renderImage(column) {
  if (column.path === "owner")
    return <img className="table__body-icon" src={user} alt="..." />;
  else if (column.label === "GROUP NAME")
    return <img className="table__body-icon" src={groupLogo} alt="..." />;
  else if (column.label === "PACK NAME")
    return <img className="table__body-icon" src={packLogo} alt="..." />;
}

const TableBody = ({ data, columns }) => {
  return (
    <tbody className="table__body">
      {data.map((item, i) => (
        <tr className="table__row" key={item.id}>
          {columns.map((column, index) => (
            <td
              key={index}
              className={`table__cell${
                column.center ? " table__cell--center" : ""
              }${column.checkbox ? " table__cell--small" : ""}`}
            >
              {renderImage(column)}
              {renderCell(item, column, i)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
