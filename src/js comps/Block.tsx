import React from "react";

function Block({ id, due, total, clientName, status }) {
  return (
    <div className="flex justify-around mt-8">
      <div>
        <p>{id}</p>
        <p>{due}</p>
        <p>{total}</p>
      </div>
      <div>
        <p>{clientName}</p>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default Block;
