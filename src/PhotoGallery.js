import React, { useContext } from "react";
import LDPContext from "./contexts/LDPContext";

const PhotoGallery = () => {
  console.log("PhotoGallery render");
  const { ldpState } = useContext(LDPContext);

  return <div>{ldpState.id}</div>;
};

export default PhotoGallery;
