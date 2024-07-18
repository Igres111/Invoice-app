import React from "react";
import { Link } from "react-router-dom";

function Block({ id, due, total, clientName, status }) {
  return (
    <Link
      to={`/${id}`}
      className="w-[327px] h-[134px] ml-[24px] mt-8 flex justify-between items-center"
    >
      <div className="flex flex-col items-start">
        <p>{id}</p>
        <p>{due}</p>
        <p>{total}</p>
      </div>
      <div className="flex flex-col items-end">
        <p>{clientName}</p>
        <p>{status}</p>
      </div>
    </Link>
  );
}

export default Block;
