
import React from 'react';
import Rows from './rows';

function MyTable({ data }) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr className="tabletitle">
          <th style={{ width: '20%' }}>Date</th>
          <th style={{ width: '40%' }}>Description</th>
          <th style={{ width: '20%' }}>Category</th>
          <th style={{ width: '20%' }}>Amount</th>
        </tr>
      </thead>
      <tbody className="table1">
        <Rows data={data} />
      </tbody>
    </table>
  );
}

export default MyTable;
