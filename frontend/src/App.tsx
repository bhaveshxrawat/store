import { Route, Routes } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";

import Homepage from "@/pages/Homepage";
import Productpage from "@/pages/Productpage";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { theme } = useThemeStore();
  return (
    <div
      className="min-h-screen bg-base-200 transition-colors duration-300"
      data-theme={theme}
    >
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
