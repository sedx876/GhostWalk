import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);


reportWebVitals(console.log);
