import React, { useReducer } from "react";
import LDPReducer from "./reducers/LDPReducer";
import PhotoGallery from "./PhotoGallery";
import LDPContext from "./contexts/LDPContext";

let ldpDispatch;

const ListingDetail = () => {
  console.log("ListingDetail render");
  const reducer = useReducer(LDPReducer, {
    id: "123"
  });

  const ldpState = reducer[0];
  ldpDispatch = reducer[1];

  return (
    <LDPContext.Provider value={{ ldpState }}>
      <div>A: {ldpState.id}</div>
      <button
        onClick={() => ldpDispatch({ type: "CHANGE_ID", data: { id: "456" } })}
      >
        ListingDetail Change id
      </button>
      <PhotoGallery />
    </LDPContext.Provider>
  );
};

export { ldpDispatch };

export default ListingDetail;
