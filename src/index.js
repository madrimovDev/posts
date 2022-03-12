import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = document.getElementById('root')

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(app, root);
