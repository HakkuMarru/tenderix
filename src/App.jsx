import { useState } from 'react';
import './App.css';
import Home from "./components/home/Home.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
function App() {

  return (
    <main>
      <Header></Header>
      {/* <Home></Home> */}
        <Pricing></Pricing>
      <Footer></Footer>
    </main>
  )
}

export default App
