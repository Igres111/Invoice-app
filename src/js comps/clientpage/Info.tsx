// import Checkout from "./Checkout";
// import InfoButtons from "./InfoButtons";

import Checkout from "../editpage/Checkout";
import InfoButtons from "./InfoButtons";

type TClient = {
  client: TData;
};

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

function Info({ client }: TClient) {
  const day = new Date(client.createdAt).getDate();
  const month = Number(new Date(client.createdAt).getMonth());
  const year = new Date(client.createdAt).getFullYear();

  const dayDue = new Date(client.paymentDue).getDate();
  const monthDue = Number(new Date(client.paymentDue).getMonth());
  const yearDue = new Date(client.paymentDue).getFullYear();

  return (
    <div>
      <div className="flex w-[327px] h-[91px] justify-around items-center bg-white mt-[31px] pl-3 ">
        <p className="text-[13px] text-[#858BB2]">Status</p>
        <div
          className={`flex items-center justify-center rounded-md w-[104px] h-[40px]  ${
            client.status === "pending"
              ? "bg-[#FF8F00]/50"
              : client.status === "paid"
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
                client.status === "pending"
                  ? "#FF8F00"
                  : client.status === "paid"
                  ? "#33D69F"
                  : "#373B53"
              }	`}
            />
          </svg>
          <p
            className={`font-bold	ml-2 ${
              client.status === "pending"
                ? "text-[#FF8F00]"
                : client.status === "paid"
                ? "text-[#33D69F]"
                : "text-[#373B53]"
            }	`}
          >
            {client.status.name}
          </p>
        </div>
      </div>
      <div className="bg-white ml-8 pl-6 mt-[16px] w-[327px] rounded-lg	">
        <div>
          <p className="font-bold pt-[25px]">#{client.id}</p>
          <p className="text-[13px] text-[#7E88C3]">{client.description}</p>
        </div>
        <div className="mt-[30px] text-[13px] text-[#7E88C3] leading-5">
          <p>{client.senderAddress.street}</p>
          <p>{client.senderAddress.city}</p>
          <p>{client.senderAddress.postCode}</p>
          <p>{client.senderAddress.country}</p>
        </div>
        <div className="flex mt-[31px]">
          <div className="flex flex-col ">
            <div>
              <p className="text-[13px] text-[#7E88C3] 	">Invoice Date</p>
              <p className="leading-5	font-bold mt-3">
                {day} {monthNames[month]} {year}
              </p>
            </div>
            <div className="mt-[31px] ">
              <p className="text-[13px] text-[#7E88C3]">Payment Due</p>
              <p className="leading-5	font-bold mt-3">
                {dayDue} {monthNames[monthDue]} {yearDue}
              </p>
            </div>
          </div>
          <div className="ml-[62px] text-[13px] text-[#7E88C3] leading-6	">
            <p className="leading-none">Bill To</p>
            <p className="font-bold text-black mt-[13px]">
              {client.clientName}
            </p>
            <p>{client.clientAddress.city}</p>
            <p>{client.clientAddress.postCode}</p>
            <p>{client.clientAddress.country}</p>
          </div>
        </div>
        <div className="mt-[35px] ">
          <p className="text-[13px] text-[#7E88C3]">Sent to</p>
          <p className="mt-[13px] font-bold">{client.clientEmail}</p>
        </div>
        <div className="mt-[63px] w-[279px] ">
          {client.items.map((el) => (
            <Checkout
              key={Math.random() * 10000}
              name={el.name}
              quantity={el.quantity}
              total={el.total}
              price={el.price}
            />
          ))}
          <div className="flex h-[80px] justify-around items-center bg-[#373B53] rounded-b-lg text-white">
            <p className="text-[13px]">Grand Total</p>
            <p className="text-6 font-bold">£ {client.total}</p>
          </div>
        </div>
      </div>
      <InfoButtons id={client.id} />
    </div>
  );
}

export default Info;
