import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import { Heroroute } from './heroes/routes/heroroute';
import { HeroDetail } from './heroes/pages/herodetail';
import { Login } from './auth/pages/login';
import * as APF from '../src/auth/context/authcontext';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.sass';
import { Search } from './heroes/pages';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <APF.AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={ <Login/> } />
          <Route path="*" element={<Navigate to=''/>} />
          <Route path='hero/*' element={ <Heroroute/> } />
          <Route path="detail/:hid" element={ <HeroDetail/> } />
          <Route path="search/:sc" element={ <Search/> } />
        </Routes>
      </BrowserRouter>
    </APF.AuthProvider>
  </React.StrictMode>
)
