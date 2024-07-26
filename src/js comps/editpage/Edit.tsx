import { Link } from "react-router-dom";
import img from "/assets/icon-arrow-left.svg";
import BillFrom from "../BillFrom";
import BillTo from "../BillTo";

function Edit() {
  return (
    <div className="pl-6">
      <Link className="mt-[33px] flex  " to={"/"}>
        <img src={img}></img>
        <span className="ml-6 font-bold	"> Go Back</span>
      </Link>
      <h1 className="font-bold text-6 text-2xl mt-[26px]">Edit //ID</h1>
      <BillFrom />
      <BillTo />
    </div>
  );
}

export default Edit;
