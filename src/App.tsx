import React from "react";
import Card from "./components/elements/Card";
import { dashboardMock } from "./mockData/dashboard.mock";

function App() {
  return (
    <div>
      <Card
        description={dashboardMock[0].description}
        logo={dashboardMock[0].logo}
      />
    </div>
  );
}

export default App;
