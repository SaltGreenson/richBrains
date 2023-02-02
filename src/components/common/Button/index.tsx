import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonConfig } from "./config";
import "./styles.less";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({ children, variant, ...props }: ButtonProps): JSX.Element => (
  <button className={buttonConfig[variant]} {...props}>
    {children}
  </button>
);

export default Button;
