import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import * as APF from '../src/auth/context/authcontext';
import { AppRouter } from './approuter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <APF.AuthProvider>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </APF.AuthProvider>
  </React.StrictMode>
)
