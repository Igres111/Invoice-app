import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalAPI } from "../logic/MainContext";
import img from "/assets/icon-arrow-left.svg";
import Info from "./Info";

function ClientInfo() {
  const { id } = useParams();
  const { client } = useContext(GlobalAPI);
  console.log(client.filter((el) => el.id === id));
  return (
    <div className="ml-6">
      <Link className="mt-[33px] flex" to={"/"}>
        <img src={img}></img>
        <span className="ml-6 font-bold	"> Go Back</span>
      </Link>

      {client
        .filter((el) => el.id === id)
        .map((el) => (
          <Info key={el.id} client={el} />
        ))}
    </div>
  );
}

export default ClientInfo;
