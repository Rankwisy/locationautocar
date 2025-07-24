import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling for missing root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found! Make sure there is a div with id="root" in your HTML.');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found. Please check the console for details.</div>';
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Error rendering React app:', error);
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Error loading application. Please check the console for details.</div>';
  }
}
