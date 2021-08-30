import React from "react";
import LoaderImage from "../image/loader.gif";

function Loader() {
  return (
    <div>
      <img
        src={LoaderImage}
        alt="loader"
        style={{ width: "300px", marginLeft: "30%", marginTop: "10%" }}
      />
    </div>
  );
}

export default Loader;
