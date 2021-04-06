import React from "react";
import { BarLoader, BounceLoader, BeatLoader } from "react-spinners";

const ReactSpinners = () => {
  return (
    <div>
      <center>
        <BarLoader size={52} color="maroon" loading></BarLoader>
        <BounceLoader size={24} color="maroon" loading></BounceLoader>
        <BeatLoader size={48} color="blue" loading></BeatLoader>
      </center>
    </div>
  );
};

export default ReactSpinners;
