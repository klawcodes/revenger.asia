import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Project from './components/project/project';
import Footer from './components/footer/footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Project />
    <Footer />
  </React.StrictMode>
);

