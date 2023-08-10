import FormPage from './pages/FormPage';
import SummaryPage from './pages/SummaryPage';
import TitlePage from './pages/TitlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<TitlePage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/summary' element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
