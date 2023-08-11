import FormPage from './pages/FormPage';
import SummaryPage from './pages/SummaryPage';
import TitlePage from './pages/TitlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TitlePage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/summary' element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
