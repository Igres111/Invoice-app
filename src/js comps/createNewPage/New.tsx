import React from "react";
import { Link } from "react-router-dom";
import img from "/assets/icon-arrow-left.svg";
import BillFrom from "../BillFrom";
import BillTo from "../BillTo";

function New() {
  return (
    <div className="ml-6">
      <Link className="mt-[33px] flex" to={"/"}>
        <img src={img}></img>
        <span className="ml-6 font-bold	">Go Back</span>
      </Link>
      <h1 className="text-2xl font-bold mt-[26px]">New Invoice</h1>
      <BillFrom />
      <BillTo />
    </div>
  );
}

export default New;
