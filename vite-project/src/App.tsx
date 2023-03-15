import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/const/const';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<div />} />
        <Route path={ROUTES.about} element={<div />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
