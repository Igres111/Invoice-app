const style_inputs =
  "rounded font-bold border border-[#DFE3FA] border-solid pl-5 h-12 mt-2";
const style_text = "text-[#7E88C3] text-[13px]";

function BillFrom() {
  return (
    <div className="mt-[22px] font-medium">
      <p className="text-[#7C5DFA] ">Bill From</p>
      <div className="mt-6">
        <p className={`${style_text}`}>Street Address</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="flex mt-6 justify-between">
        <div>
          <p className={`${style_text}`}>City</p>
          <input className={`w-[152px] ${style_inputs}`} />
        </div>
        <div>
          <p className={`${style_text}`}>Post Code</p>
          <input className={`w-[152px] ${style_inputs}`} />
        </div>
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Country</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <p className="text-[#7C5DFA] mt-[41px]">Bill to</p>
      <div className="mt-6">
        <p className={`${style_text}`}>Client's Name</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Client's Email</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Street Address</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="flex mt-6 justify-between">
        <div>
          <p className={`${style_text}`}>City</p>
          <input className={`w-[152px] ${style_inputs}`} />
        </div>
        <div>
          <p className={`${style_text}`}>Post Code</p>
          <input className={`w-[152px] ${style_inputs}`} />
        </div>
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Country</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Invoice Date</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Payment Terms</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Project Description</p>
        <input className={`w-[327px] ${style_inputs}`} />
      </div>
    </div>
  );
}

export default BillFrom;
