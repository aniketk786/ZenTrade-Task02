// components/DataTable.js
import React from 'react';

const DataTable = ({ data, displayOptions }) => {
  // Sort data based on descending popularity
  const sortedData = data.sort((a, b) => b.popularity - a.popularity);

  // Filter data based on selected displayOptions
  const filteredData = sortedData.map((product) =>
    displayOptions.reduce((acc, option) => {
      acc[option] = product[option];
      return acc;
    }, {})
  );

  return (
    <div>
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            {displayOptions.map((option) => (
              <th key={option}>{option}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {displayOptions.map((option) => (
                <td key={option}>{row[option]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
