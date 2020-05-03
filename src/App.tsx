import React from "react";
import Button from "./components/Button";

const data: number[] = [1, 2, 3, 4];

const App = () => {
  return <Button label="Generate export" exportData={data} />;
};

export default App;
