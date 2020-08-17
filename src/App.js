import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router/>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
