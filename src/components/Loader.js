import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <TailSpin color="blue" height="80" width="80" />
      <h3>Fetching data...</h3>
    </div>
  );
};

export default Loader;
