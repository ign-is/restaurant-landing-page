import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import About from "./components/About";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <Dishes />
      <About />
    </main>
  )
}

export default App;