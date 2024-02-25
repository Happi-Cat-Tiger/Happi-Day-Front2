'use client';
import React from 'react';
import { Card } from './Hd-material-tailwind';

interface TableProps {
  TABLE_HEAD: Array<{ [key: string]: string }>;
  TABLE_ROWS: Array<{ [key: string]: string | React.ReactNode }>;
}
const Table = ({ TABLE_HEAD, TABLE_ROWS }: TableProps) => {
  return (
    <Card color="white" className="h-full w-full rounded-none" shadow={true} placeholder="">
      <table className="w-full  table-auto  text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className=" border-blue-gray-100 bg-gray7 p-4">
                {Object.values(head).toString()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS?.map((rowData, rowIndex) => {
            const isLast = rowIndex === TABLE_ROWS.length - 1;
            const classes = isLast ? 'p-2 md:p-4' : 'p-2 md:p-4 border-b border-blue-gray-50  ';

            return (
              <tr key={rowIndex}>
                {TABLE_HEAD.map((head) => (
                  <td key={Object.keys(head)[0]} className={classes}>
                    {rowData[Object.keys(head)[0]]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
