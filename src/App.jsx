import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="bg-slate-900">
      <ImageSlider />
    </div>
  );
}

export default App;
