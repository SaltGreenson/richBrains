import React, { HTMLAttributes, ReactNode } from "react";
import "./styles.less";

interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}

const Title = ({ children, ...props }: TitleProps): JSX.Element => (
  <h1 className="title" {...props}>
    {children}
  </h1>
);

export default Title;
