import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './utils/const/const';
import './App.scss';
import './styles/entry.scss'
import MainPage from './pages/main-page/main-page';
import Page404 from './pages/404-page/404-page';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.about} element={<h2>about us</h2>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;