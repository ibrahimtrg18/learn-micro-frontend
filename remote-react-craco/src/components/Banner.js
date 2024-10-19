import React from "react";
import pkg from "../../package.json";

const Banner = (props) => {
  const { title, description } = props;

  return (
    <div>
      <small>Banner {pkg.name}</small>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default Banner;
