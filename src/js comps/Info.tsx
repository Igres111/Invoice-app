type TClient = {
  client: TData;
};

function Info({ client }: TClient) {
  function handleUpperCase() {
    const arr = client.status.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  }
  return (
    <div>
      <div className="flex w-[327px] h-[91px] justify-around items-center bg-white mt-[31px]">
        <p className="text-[13px] text-[#858BB2]">Status</p>
        <div
          className={`flex items-center justify-center rounded-md w-[104px] h-[40px] ${
            client.status === "pending"
              ? "bg-[#FF8F00]/50"
              : client.status === "paid"
              ? "bg-[#33D69F]/50"
              : "bg-[#373B53]/50"
          }`}
        >
          <svg
            className="opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#FF8F00" />
          </svg>
          <p
            className={`font-bold	ml-2 opacity-100 ${
              client.status === "pending"
                ? "text-[#FF8F00]"
                : client.status === "paid"
                ? "text-[#33D69F]"
                : "text-[#373B53]"
            }	`}
          >
            {handleUpperCase()}
          </p>
        </div>
      </div>
      <div className="bg-white">
        <p>{client.id}</p>
        <p>{client.description}</p>
        <p>{client.senderAddress.postCode}</p>
        <p>{client.senderAddress.country}</p>
      </div>
    </div>
  );
}

export default Info;
