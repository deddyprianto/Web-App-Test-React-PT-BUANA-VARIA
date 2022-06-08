import React, { useRef } from "react";
import { EyeIcon } from "@heroicons/react/outline";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ExpandedTable from "./ExpandedTable";

const expandRow = {
  renderer: (row) => <ExpandedTable rowData={row} />,
};
const TableCat = ({ dataRes }) => {
  const lastBookElementRef = useRef(null);
  const columns = [
    {
      dataField: "name",
      text: "Name Cat",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex h-full w-full justify-center items-center ml-1">
          <h1>{column.text}</h1>
        </div>
      ),
    },
    {
      dataField: "temperament",
      text: "Temperament",
      headerFormatter: (column, colIndex, components) => (
        <div className="flex h-full w-full justify-center items-center">
          <h1>{column.text}</h1>
        </div>
      ),
    },
    {
      dataField: "link",
      text: "Detail",
      formatter: (rowContent, row) => {
        return (
          <div className="flex justify-center w-full">
            <div className="cursor-pointer flex justify-center items-center w-10 h-8 p-2 rounded-md text-blue-500">
              <EyeIcon className="w-5 h-5" />
            </div>
          </div>
        );
      },
    },
  ];
  const loading = [
    {
      name: "loading data",
    },
  ];
  return (
    <BootstrapTable
      ref={lastBookElementRef}
      keyField="id"
      data={!dataRes ? loading : dataRes}
      columns={columns}
      rowClasses="h-20"
      classes="w-full"
      headerClasses="h-20 bg-sky-200 font-popins text-lg text-gray-700"
      bodyClasses="divide-y text-gray-700 font-popins !font-normal text-center"
      expandRow={expandRow}
    />
  );
};

export default TableCat;
