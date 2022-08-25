import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.sass';

import { Marvel } from './heroes/pages/Marvel';
import { Dc } from './heroes/pages/Dc';
import { Login } from './auth/pages/login';
import { Navbar } from '../src/ui/components';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/marvel" element={<Marvel />}></Route>
      <Route path="/dc" element={<Dc />}></Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='*' element={<Navigate to='/'/>}></Route>
    </Routes></BrowserRouter>
  </React.StrictMode>
)
