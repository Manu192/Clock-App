import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClockProvider } from './Context/Clockcontext'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClockProvider>
      <App />
    </ClockProvider>
  </React.StrictMode>
);
