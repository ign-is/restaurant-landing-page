import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
    </main>
  )
}

export default App;