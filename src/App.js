// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
            <Route path="/simon-savannah" element={<SplashPage />} />
            <Route path="/simon-savannah/comics" element={<Comics />} />
            <Route path="/simon-savannah/paintings" element={<Paintings />} />
            <Route path="/simon-savannah/drawings" element={<Drawings />} />
            <Route path="/simon-savannah/prints" element={<Prints />} />
            <Route path="/simon-savannah/poetry" element={<Poetry />} />
            <Route
              path="/simon-savannah/mixed-media"
              element={<MixedMedia />}
            />
            <Route
              path="/"
              element={<Navigate replace to="/simon-savannah" />}
            />
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
    marginLeft: "200px",
    padding: "20px",
    flex: 1,
  },
};

export default App;
