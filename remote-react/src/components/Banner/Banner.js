import React from "react";
import * as BannerStyles from "./Banner.styles";
import pkg from "../../../package.json";

const Banner = (props) => {
  const { title, description } = props;

  return (
    <BannerStyles.Banner>
      <small>Banner {pkg.name}</small>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </BannerStyles.Banner>
  );
};

export default Banner;
