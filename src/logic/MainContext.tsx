import React, { createContext, useEffect, useState } from "react";
import App from "../App";

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
  const [client, setClient] = useState<TDataArray>([]);
  console.log(client);

  function markAsPaid(id: string) {
    setClient((prevClient) =>
      prevClient.map((el) => (el.id === id ? { ...el, status: "paid" } : el))
    );
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://64.226.119.53:8000/api/invoice/");
      const res = await data.json();
      setClient(res);
    };
    fetchData();
  }, []);
  return (
    <>
      <GlobalAPI.Provider value={{ client, setClient, markAsPaid }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default MainContext;
