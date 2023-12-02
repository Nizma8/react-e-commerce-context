import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainContext from './Context/MainContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MainContext> <BrowserRouter> <App /></BrowserRouter></MainContext>
  </React.StrictMode>,
)
