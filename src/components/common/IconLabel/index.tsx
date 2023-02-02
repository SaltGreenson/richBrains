import React, { LabelHTMLAttributes, ReactNode } from "react";
import "./styles.less";
interface IconLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  icon: ReactNode;
}

const IconLabel = ({ children, icon }: IconLabelProps): JSX.Element => (
  <div className="container-icon-label">
    {icon}
    {children}
  </div>
);

export default IconLabel;
