import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./components/home/Home.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import News from "./components/news/News.jsx";
import Article from "./components/news/components/Article.jsx";
import Contact from "./components/contact/Contact.jsx";



import ScrollToTop from './scripts/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
