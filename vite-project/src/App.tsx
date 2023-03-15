import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './utils/const/const';
import './App.css';
import MainPage from './pages/main-page/main-page';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.about} element={<h2>about us</h2>} />
        <Route path="*" element={<h2>not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;