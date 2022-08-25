import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import { Heroroute } from './heroes/routes/heroroute';
import { Loginroute } from './auth/routes/loginroute';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Loginroute/> } />
        <Route path='/hero/*' element={ <Heroroute/> } />

        <Route path="/" element={<Navigate to='/'/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
