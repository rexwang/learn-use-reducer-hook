import React, { useContext } from "react";
import SRPContext from "./contexts/SRPContext";
import { ldpDispatch } from "./ListingDetail";

const ResultCard = () => {
  console.log("ResultCard render");
  const { srpState } = useContext(SRPContext);
  return (
    <div>
      <div>
        {srpState.user} {srpState.theme}
      </div>
      <button
        onClick={() => {
          ldpDispatch({
            type: "CHANGE_ID",
            data: { id: "789" }
          });
        }}
      >
        Change property from Result Card
      </button>
    </div>
  );
};

export default ResultCard;
