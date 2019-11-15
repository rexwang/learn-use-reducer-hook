import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import SRPContext from "./contexts/SRPContext";
import SRPReducer from "./reducers/SRPReducer";
import ResultCard from "./ResultCard";
import ListingDetail from "./ListingDetail";

import "./styles.css";

function App() {
  console.log("App render");
  const [srpState, srpDispatch] = useReducer(SRPReducer, {
    theme: "blue",
    user: "rex"
  });

  return (
    <SRPContext.Provider value={{ srpState, srpDispatch }}>
      <ResultCard />
      <ListingDetail />
    </SRPContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
