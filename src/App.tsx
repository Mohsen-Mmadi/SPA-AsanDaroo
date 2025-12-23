import { useEffect, useState } from "react";
import "@/App.css";
import "@/index.css";
// import { Button } from "@/components/ui/button"
// import { Card,CardHeader } from "@/components/ui/card"
import Navbar from "@/components/Navbar";
import Herosection from "@/components/HeroSection";
import Vendors from "@/components/Vendors";
import Footer from "@/components/Footer";
import NavbarDown from "@/components/NavbarDown";
function App() {
  return (
    <>
      <div className="myContainer m-auto">
        <Navbar />
        <Herosection />
        <main>
          <Vendors />
        </main>
        <Footer/>
        <NavbarDown />
      </div>
    </>
  );
}

export default App;
