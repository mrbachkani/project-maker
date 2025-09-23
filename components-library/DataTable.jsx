import React from 'react';

/**
 * Renders a table given an array of column definitions and data objects.  Each
 * column definition should have a `header` (string) and an `accessor` (key
 * of the data object).  The table is minimally styled using Tailwind CSS.
 *
 * @param {Object[]} columns An array of objects with `header` and `accessor`.
 * @param {Object[]} data An array of data objects to display.
 */
export function DataTable({ columns, data }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              className="px-4 py-2 text-left text-sm font-medium text-gray-700"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.accessor} className="px-4 py-2 text-sm text-gray-700">
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}