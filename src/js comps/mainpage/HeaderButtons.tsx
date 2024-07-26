import React, { useContext } from "react";
import { GlobalAPI } from "../../logic/MainContext";

function HeaderButtons(props) {
  const { client } = useContext(GlobalAPI);

  return (
    <div>
      <div>
        <p>Invoices</p>
        <p>{client.length}</p>
      </div>
      <div>
        <p> smth</p>
      </div>
    </div>
  );
}

export default HeaderButtons;
