import { Route, Routes } from 'react-router-dom';

import SiteHeader from '@/components/SiteHeader';

import Homepage from '@/pages/Homepage';

function App() {
  return (
    <div className="flex h-dvh flex-col justify-stretch gap-6 bg-amulet-200 px-6 py-8 max-sm:gap-4 max-sm:px-4 max-sm:py-0">
      <SiteHeader />
      <Routes>
        <Route element={<Homepage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
