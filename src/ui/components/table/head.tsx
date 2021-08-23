import React from "react";

interface headProps {
  headTitles: string[];
  align?: string;
}

export const TableHead = ({ headTitles, align = "center" }: headProps) => {
  return (
    <thead>
      <tr>
        {headTitles.map((it, key) => {
          return (
            // return table head based on array of string
            <th
              scope="col"
              key={key}
              className={`px-5 py-3 bg-mainDark dark:bg-main cursor-default text-left text-white text-xs md:text-sm uppercase font-bold font-title`}
            >
              {it}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
