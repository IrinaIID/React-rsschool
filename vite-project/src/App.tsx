import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ROUTES } from './utils/const/const';
import './App.scss';
import './styles/entry.scss';
import MainPage from './pages/main-page/main-page';
import Page404 from './pages/404-page/404-page';
import AboutPage from './pages/about-page/about-page';
import FormsPage from './pages/forms-page/forms-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.forms} element={<FormsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
