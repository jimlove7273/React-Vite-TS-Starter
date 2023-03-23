/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
