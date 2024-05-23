/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useFilters, useTable, useSortBy  } from "react-table";

const Table = ({ columns, data }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
    // setAllFilters 
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy 
  );

  const handleFilterChange = (e) => {
    const value  = e.target.value || undefined;
    // setAllFilters([
    //     {
    //       id: "show.name",  USED FOR FILTERING BASED ON MANY THINGS
    //       value: value,
    //     },
    //     {
    //         id: "show.type",
    //         value: value
    //     },
    //     {
    //         id: "show.language",
    //         value: value
    //     }
    //   ]);

    //FILTER BASED ON ONE 
    setFilter("show.name", value)
    setGlobalFilter(value)
  }
  return (
    <div className="p-4">
      <span className="flex items-center mb-4">
        <input
          value={globalFilter || ""}
          onChange={handleFilterChange}
          placeholder="Search..."
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </span>
      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-gray-50">
            {headerGroups?.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                  column.isSorted
                    ? column.isSortedDesc
                      ? "sort-desc"
                      : "sort-asc"
                    : ""
                }
              >
                {column.render("Header")}
              </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
