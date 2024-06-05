import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BooksProvider } from './context/Books';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BooksProvider>
    <BrowserRouter>
        <App />
    
    </BrowserRouter>
    </BooksProvider>
    
  </React.StrictMode>
);
