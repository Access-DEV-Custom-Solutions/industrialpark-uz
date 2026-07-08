import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Homee";
import Production from "./pages/Production";
import Processing from "./pages/Processing";
import Tourism from "./pages/Tourism";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="site">
        {/* Your Navbar handles displaying the toggle button responsively now */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/production" element={<Production />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}