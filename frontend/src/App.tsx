import { Route, Routes } from "react-router-dom";

import SiteHeader from "@/components/SiteHeader";

import Homepage from "@/pages/Homepage";

function App() {
  return (
    <div className="min-h-dvh bg-amulet-200 py-8 px-6 flex flex-col justify-stretch gap-6 max-sm:gap-4 max-sm:py-0 max-sm:px-4">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
