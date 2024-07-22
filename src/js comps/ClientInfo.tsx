import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalAPI } from "../logic/MainContext";
import Info from "./Info";

function ClientInfo() {
  const { id } = useParams();
  const { client } = useContext(GlobalAPI);
  console.log(client.filter((el) => el.id === id));
  return (
    <div>
      <Link to={"/"}>Go Back</Link>

      {client
        .filter((el) => el.id === id)
        .map((el) => (
          <Info key={el.id} client={el} />
        ))}
    </div>
  );
}

export default ClientInfo;
