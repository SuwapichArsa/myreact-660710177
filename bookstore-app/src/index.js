import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

// สร้าง root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render แอปพลิเคชัน
root.render(
  <React.StrictMode>
    {/* BrowserRouter ครอบ App เพื่อเปิดใช้งาน routing ทั่วทั้งแอป */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);