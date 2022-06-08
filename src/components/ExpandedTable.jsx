import React from "react";

const ExpandedTable = ({ rowData }) => {
  return (
    <div>
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
        <div className="w-full">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b bg-red-100">
                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Description
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Origin
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Country Code
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Cat Friendly
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Dog friendly
                </th>

                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  Health Issues
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="h-24 border-gray-300 dark:border-gray-200 border-b ">
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.description}
                </td>
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.origin}
                </td>
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.country_code}
                </td>
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.cat_friendly}
                </td>
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.dog_friendly}
                </td>
                <td className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal leading-4">
                  {rowData.health_issues}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ExpandedTable;
