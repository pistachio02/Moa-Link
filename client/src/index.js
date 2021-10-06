import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
 
  document.getElementById('root')
);
