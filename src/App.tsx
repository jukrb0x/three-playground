import { CssBaseline, GeistProvider } from '@geist-ui/core';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Ocean from '@/components/OceanExample';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="ocean" element={<Ocean />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <AppRouter />
    </GeistProvider>
  );
}

export default App;
