import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChansaaDolooHonog from './pages/ChansaaDolooHonog';
import DadlagaHicheeliynUrDun from './pages/DadlagaHicheeliynUrDun';
import DadlagaKodynUrDun from './pages/DadlagaKodynUrDun';
import DadlagaSongohAsuult from './pages/DadlagaSongohAsuult';
import DadlagaSuralcahZam from './pages/DadlagaSuralcahZam';
import DadlagaUnenEsvelHudal from './pages/DadlagaUnenEsvelHudal';
import MiniyOrooOgloo from './pages/MiniyOrooOgloo';
import NevtrehShoniynOroo from './pages/NevtrehShoniynOroo';
import SudlahHicheeliynSan from './pages/SudlahHicheeliynSan';
import SudlahReactLekciynDelgerenguy from './pages/SudlahReactLekciynDelgerenguy';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<ChansaaDolooHonog />} />
			<Route path="/ChansaaDolooHonog" element={<ChansaaDolooHonog />} />
			<Route path="/DadlagaHicheeliynUrDun" element={<DadlagaHicheeliynUrDun />} />
			<Route path="/DadlagaKodynUrDun" element={<DadlagaKodynUrDun />} />
			<Route path="/DadlagaSongohAsuult" element={<DadlagaSongohAsuult />} />
			<Route path="/DadlagaSuralcahZam" element={<DadlagaSuralcahZam />} />
			<Route path="/DadlagaUnenEsvelHudal" element={<DadlagaUnenEsvelHudal />} />
			<Route path="/MiniyOrooOgloo" element={<MiniyOrooOgloo />} />
			<Route path="/NevtrehShoniynOroo" element={<NevtrehShoniynOroo />} />
			<Route path="/SudlahHicheeliynSan" element={<SudlahHicheeliynSan />} />
			<Route path="/SudlahReactLekciynDelgerenguy" element={<SudlahReactLekciynDelgerenguy />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;