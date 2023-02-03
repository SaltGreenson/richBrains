import React, { HTMLAttributes, ReactNode } from "react";
import "./styles.less";

interface DashboardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  head: ReactNode;
  menu: ReactNode;
}

const DashboardLayout = ({
  children,
  head,
  menu,
  ...props
}: DashboardProps): JSX.Element => (
  <div className="dashboard-layout-container" {...props}>
    <div className="dashboard-layout-container__head">{head}</div>
    {/*<div className="dashboard-layout-container__menu">{menu}</div>*/}
    <div className="dashboard-layout-container__content">{children}</div>
  </div>
);

export default DashboardLayout;
