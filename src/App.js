// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import SplashPage from "./components/SplashPage";
import Comics from "./components/Comics";
import Paintings from "./components/Paintings";
import Drawings from "./components/Drawings";
import Prints from "./components/Prints";
import Poetry from "./components/Poetry";
import MixedMedia from "./components/MixedMedia";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <SideNav />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/drawings" element={<Drawings />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/mixed-media" element={<MixedMedia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  content: {
    marginLeft: "200px", // This should match the width of the SideNav
    padding: "20px",
    flex: 1,
  },
};

export default App;
