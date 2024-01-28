'use client';

import React from 'react';
import { Card, Typography } from './tailwindexport';

interface TableProps {
  TABLE_HEAD: object[];
  TABLE_ROWS: object[];
}
const Table = ({ TABLE_HEAD, TABLE_ROWS }: TableProps) => {
  return (
    <Card color="white" className="h-full w-full " shadow={true} placeholder>
      <table className="w-full  table-auto  text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th key={index} className=" border-blue-gray-100 bg-gray7 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" text-[13px] font-normal leading-none  opacity-70 md:text-[14px]"
                  placeholder>
                  {Object.values(head).toString()}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS?.map((rowData, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? 'p-2 md:p-4' : 'p-2 md:p-4 border-b border-blue-gray-50  ';

            return (
              <tr key={rowData.id}>
                {TABLE_HEAD.map((head, index) => (
                  <td key={index} className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-[12px] font-normal md:text-[14px]"
                      placeholder>
                      {rowData[Object.keys(head).toString()]}
                    </Typography>
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
