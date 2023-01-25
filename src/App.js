import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IframeParent from "./components/iframeParent";
import IframeChild from "./components/iframeChild";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IframeParent />} />
        <Route
          exact
          path="https://netomi-app.netlify.app/iframe-child/"
          element={<IframeChild />}
        />
      </Routes>
    </Router>
  );
}

export default App;
