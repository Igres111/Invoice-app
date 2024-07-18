import React from "react";

function Info({ client }) {
  return (
    <div>
      <div>
        <p>Status</p>
        <p>{client.status}</p>
      </div>
      <div>
        <p>{client.id}</p>
        <p>{client.description}</p>
        <p>{client.senderAddress.postCode}</p>
        <p>{client.senderAddress.country}</p>
      </div>
    </div>
  );
}

export default Info;
