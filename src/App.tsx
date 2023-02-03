import React from "react";
import LoadMore from "./components/common/LoadMore";
import Title from "./components/common/Title";
import Card from "./components/elements/Card";
import Menu from "./components/elements/Menu";
import DashboardLayout from "./components/layouts/Dashboard";
import { dashboardMock } from "./mockData/dashboard.mock";
import "./app.styles.less";

function App() {
  return (
    <DashboardLayout head={<Title>Find Your Course</Title>} menu={<Menu />}>
      <div className="dashboard-cards-container">
        {dashboardMock &&
          dashboardMock.map(({ logo, description }, idx) => (
            <Card key={idx} logo={logo} description={description} />
          ))}
      </div>
      <div className="dashboard-load-more-container">
        <LoadMore />
      </div>
    </DashboardLayout>
  );
}

export default App;
