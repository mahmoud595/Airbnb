import "./App.css";
import { useState, useEffect } from "react";
import Header2 from "./Components/Header2/Header2";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import GoogleMap from "./Components/GoogleMap/GoogleMap";

function App() {
  return (
    <div className="App">
      <Header2 />

      <GoogleMap />

      <Footer />
    </div>
  );
}

export default App;
