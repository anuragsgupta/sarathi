import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename={"/vite-react-ts/"}>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
