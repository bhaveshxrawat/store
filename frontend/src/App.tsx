import { Route, Routes } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";

import Homepage from "@/pages/Homepage";
import Productpage from "@/pages/Productpage";

function App() {
  return (
    <div className="min-h-screen bg-amulet-950 py-8 px-6 max-sm:py-0 max-sm:px-4">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
