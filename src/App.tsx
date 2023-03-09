import { useState } from 'react';
import styled from 'styled-components';
import { GeistProvider, CssBaseline } from '@geist-ui/core'

import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import {NotFound} from './pages/NotFound';

function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function App(){
  return(
    <GeistProvider>
      <CssBaseline />
      <AppRouter />
    </GeistProvider>
  )
}

export default App;
