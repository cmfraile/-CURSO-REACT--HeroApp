import React from 'react';
import ReactDOM from 'react-dom/client';
import { Heroapp } from './heroapp';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Heroapp />
  </React.StrictMode>
)
