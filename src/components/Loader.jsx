import React from "react";
import { RotatingLines } from "react-loader-spinner";

const loader = {
  width: "100%",
  textAlign: "center",
  height: "1000px",
  marginTop: "100px",
};
function Loader() {
  return (
    <div style={loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}

export default Loader;
