import React, { createContext, useState } from "react";
import App from "../App";
import data from "../data.json";

type TContext = {
  client: TDataArray;
  setClient: React.Dispatch<React.SetStateAction<TDataArray>>;
};

export const GlobalAPI = createContext<TContext>({
  client: [],
  setClient: () => {},
});

function MainContext() {
  const [client, setClient] = useState<TDataArray>(data);
  console.log(client);

  return (
    <>
      <GlobalAPI.Provider value={{ client, setClient }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default MainContext;
