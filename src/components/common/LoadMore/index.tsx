import React, { ButtonHTMLAttributes } from "react";
import "./styles.less";
import RoundArrow from "../Signs/RoundArrow";

const LoadMore = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <div className="load-more-container">
    <button {...props}>more programmes</button>
    <RoundArrow />
  </div>
);

export default LoadMore;
