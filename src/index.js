import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import CoinTracker from './CoinTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <App2 />
    <br/>
    <CoinTracker />
  </React.StrictMode>
);

