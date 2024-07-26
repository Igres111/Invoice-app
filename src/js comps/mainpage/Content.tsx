import React, { useContext, useState } from "react";
import { GlobalAPI } from "../../logic/MainContext";
import Block from "./Block";
import Empty from "../../simple comps/Empty";
import HeaderButtons from "./HeaderButtons";

function Content(props) {
  const { client } = useContext(GlobalAPI);
  return (
    <div className="flex flex-col items-center ">
      <HeaderButtons />
      {client.length === 0 ? (
        <Empty />
      ) : (
        client.map((el) => (
          <Block
            key={el.id}
            status={el.status.name}
            id={el.id}
            due={el.paymentDue}
            total={el.total}
            clientName={el.clientName}
          />
        ))
      )}
    </div>
  );
}

export default Content;
