import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/const/const';
import './App.scss';
import './styles/entry.scss';
import MainPage from './pages/main-page/main-page';
import Page404 from './pages/404-page/404-page';
import AboutPage from './pages/about-page/about-page';
import FormsPage from './pages/forms-page/forms-page';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.forms} element={<FormsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Provider>
  );
}

export default App;
