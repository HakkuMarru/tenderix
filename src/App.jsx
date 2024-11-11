import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
