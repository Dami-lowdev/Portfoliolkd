import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";




ReactDOM.render(
  <BrowserRouter>
    <App /> {/*we use it to call our App */}
  </BrowserRouter>,
  document.getElementById('root')
);


