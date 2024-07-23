import React, { createContext, useState } from "react";
import App from "../App";
import data from "../data.json";

type TContext = {
  client: TDataArray;
  setClient: React.Dispatch<React.SetStateAction<TDataArray>>;
  markAsPaid: (id: string) => void;
};

export const GlobalAPI = createContext<TContext>({
  client: [],
  setClient: () => {},
  markAsPaid: () => {},
});

function MainContext() {
  const [client, setClient] = useState<TDataArray>(data);
  console.log(client);

  function markAsPaid(id: string) {
    setClient((prevClient) =>
      prevClient.map((el) => (el.id === id ? { ...el, status: "paid" } : el))
    );
  }
  return (
    <>
      <GlobalAPI.Provider value={{ client, setClient, markAsPaid }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default MainContext;
