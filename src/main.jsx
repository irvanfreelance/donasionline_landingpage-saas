import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Memicu event agar vite-plugin-prerender / Puppeteer tahu kapan halaman selesai dimuat
document.dispatchEvent(new Event('custom-render-trigger'));
