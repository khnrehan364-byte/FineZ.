import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import "@/index.css";

// Pages
import HomePage from "@/pages/HomePage";
import MarketplacePage from "@/pages/MarketplacePage";
import AffiliatePage from "@/pages/AffiliatePage";
import DropshipPage from "@/pages/DropshipPage";
import IdeasPage from "@/pages/IdeasPage";
import SellPage from "@/pages/SellPage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";

// Layout
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F172A]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/dropship" element={<DropshipPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
