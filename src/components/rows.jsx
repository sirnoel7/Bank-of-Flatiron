import React from 'react';

function Rows({ data }) {
  return (
    <>
      
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default Rows;
