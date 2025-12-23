import { useEffect, useState } from "react";
import "@/App.css";
import "@/index.css";
// import { Button } from "@/components/ui/button"
// import { Card,CardHeader } from "@/components/ui/card"
import Navbar from "@/components/Navbar";
import Herosection from "@/components/HeroSection";
import Vendors from "@/components/Vendors";
function App() {
  return (
    <>
      <div className="myContainer m-auto">
        <Navbar />
        <Herosection />
        <main>
          <Vendors />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
