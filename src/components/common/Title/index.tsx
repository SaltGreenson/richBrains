import React, { HTMLAttributes, ReactNode } from "react";
import "./styles.less";

interface TitleProps extends HTMLAttributes<HTMLHtmlElement> {
  children: ReactNode;
}

const Title = ({ children }: TitleProps): JSX.Element => (
  <h1 className="title">{children}</h1>
);

export default Title;
