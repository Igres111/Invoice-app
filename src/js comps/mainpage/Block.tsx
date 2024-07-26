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
        <p className="text-[#0C0E16] font-bold  mb-6">#{id}</p>
        <p className="text-[13px] font-medium	text-[#888EB0]">
          Due &nbsp;
          {day} &nbsp;
          {monthNames.map((el, index) => (index === month ? el : null))} &nbsp;
          {year}
        </p>
        <p className="text-[#0C0E16] font-bold mt-2">£{total}</p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-[13px] text-[#888EB0] font-medium ">{clientName}</p>
        <div
          className={`flex mt-6 items-center justify-center  rounded-md w-[104px] h-[40px]  ${
            status === "pending"
              ? "bg-[#FF8F00]/50"
              : status === "paid"
              ? "bg-[#33D69F]/50"
              : "bg-[#373B53]/50"
          }`}
        >
          <svg
            className="mb-[2px]"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
          >
            <circle
              cx="4"
              cy="4"
              r="4"
              fill={`${
                status === "pending"
                  ? "#FF8F00"
                  : status === "paid"
                  ? "#33D69F"
                  : "#373B53"
              }	`}
            />
          </svg>
          <p
            className={`font-bold	ml-2 ${
              status === "pending"
                ? "text-[#FF8F00]"
                : status === "paid"
                ? "text-[#33D69F]"
                : "text-[#373B53]"
            }	`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Block;
