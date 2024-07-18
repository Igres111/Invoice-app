import React, { useContext, useState } from "react";
import { GlobalAPI } from "../logic/MainContext";
import Block from "./Block";
import Empty from "../simple comps/Empty";

function Content(props) {
  const { client } = useContext(GlobalAPI);
  return (
    <>
      {client.length === 0 ? (
        <Empty />
      ) : (
        client.map((el) => (
          <Block
            status={el.status}
            id={el.id}
            due={el.paymentDue}
            total={el.total}
            clientName={el.clientName}
          />
        ))
      )}
    </>
  );
}

export default Content;
