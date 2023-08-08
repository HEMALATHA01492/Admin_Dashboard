import React from "react";
import Wrapper from "./component/Wrapper";
import { DataProvider } from "./Context/DataContext";

const App = () => {
  return (
    <div>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </div>
  );
};

export default App;