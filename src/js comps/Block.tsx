import React from "react";
import { Link } from "react-router-dom";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
type TBlock = {
  id: string;
  due: string;
  total: number;
  clientName: string;
  status: string;
};

function Block({ id, due, total, clientName, status }: TBlock) {
  const day = new Date(due).getDate();
  const month = Number(new Date(due).getMonth());
  const year = new Date(due).getFullYear();

  return (
    <Link
      to={`/${id}`}
      className="w-[327px] h-[134px]  mt-8 flex justify-between items-center bg-[#FFFFFF] rounded-lg	"
    >
      <div className="flex flex-col items-start ml-6">
        <p className="text-[#0C0E16] font-bold mt-6 mb-6">#{id}</p>
        <p className="text-[13px] font-medium	text-[#888EB0]">
          Due &nbsp;
          {day} &nbsp;
          {monthNames.map((el, index) => (index === month ? el : null))} &nbsp;
          {year}
        </p>
        <p className="text-[#0C0E16] font-bold mt-2">£{total}</p>
      </div>
      <div className="flex flex-col items-end">
        <p>{clientName}</p>
        <p>{status}</p>
      </div>
    </Link>
  );
}

export default Block;
