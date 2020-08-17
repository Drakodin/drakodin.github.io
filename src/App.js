import React from 'react';
import Router from './Router';
import { HashRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Router/>
      </HashRouter>
    </SnackbarProvider>
  );
}

export default App;
