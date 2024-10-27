import { useState } from 'react';

type Column<T> = {
  label: string; // Displayed header name
  key: keyof T; // Key in data object
  sortable?: boolean;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  heading?: string;
};

function Table<T>({ data, columns, heading }: TableProps<T>) {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortData = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }

    const sortedArray = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  // Render the table
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        {heading}
      </h4>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            {columns.map((column, index) =>
              column.key === 'icon' ? (
                <th key={index} scope="col" className="px-6 py-6 text-center">
                  <h5 className="text-md font-medium uppercase xsm:text-base">
                    {column.label}
                  </h5>
                </th>
              ) : (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-6 text-left cursor-pointer"
                  onClick={() => column.sortable && sortData(column.key)}
                >
                  <h5 className="text-md font-medium uppercase xsm:text-base">
                    {column.label}{' '}
                    {sortConfig?.key === column.key &&
                      (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </h5>
                </th>
              ),
            )}
          </tr>
        </thead>

        {/* Render Rows */}

        <tbody>
          {sortedData.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex < sortedData.length - 1
                  ? 'border-b border-stroke dark:border-strokedark'
                  : ''
              }`}
            >
              {columns.map((column, colIndex) =>
                column.key === 'icon' ? (
                  <td key={colIndex} className="px-1 py-5 text-center">
                    <div className="flex items-center justify-center">
                      {item[column.key] as React.ReactNode}
                    </div>
                  </td>
                ) : (
                  <td key={colIndex} className="px-6 py-5 text-left">
                    <p className="text-black dark:text-white text-sm">
                      {String(item[column.key]) || ''}
                    </p>
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
