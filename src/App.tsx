import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
// import { Button } from "@/components/ui/button"
// import { Card,CardHeader } from "@/components/ui/card"
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="myContainer m-auto">
        <Navbar />
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
