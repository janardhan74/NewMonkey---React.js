import React from "react";
import loading from "./loading.webp";

export default function Loader() {
  return (
    <div className="text-center">
      <img src={loading} alt="loader" width="200px" />
    </div>
  );
}
