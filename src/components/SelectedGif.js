import React from "react";
import "./SelectedGif.css";

const SelectedGif = ({ gif }) => {
  return (
    <div className="selectedGif">
      <img src={gif.images.downsized_large.url} alt={gif.title} />
    </div>
  );
};

export default SelectedGif;
