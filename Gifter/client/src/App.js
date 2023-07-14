import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews"; // Update the import statement

function App() {
  return (
    <BrowserRouter>
        <Header />
        <ApplicationViews />
    </BrowserRouter>
  );
}

export default App;