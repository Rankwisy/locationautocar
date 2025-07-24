import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced error handling and performance monitoring
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found! Make sure there is a div with id="root" in your HTML.');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found. Please check the console for details.</div>';
} else {
  try {
    // Performance monitoring
    const startTime = performance.now();
    
    // Add global error handler
    window.addEventListener('error', (event) => {
      console.error('Global error caught:', event.error);
      // Log to monitoring service if available
      if ((window as any).Sentry) {
        (window as any).Sentry.captureException(event.error);
      }
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      // Log to monitoring service if available
      if ((window as any).Sentry) {
        (window as any).Sentry.captureException(event.reason);
      }
    });

    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    // Log successful mount time
    const mountTime = performance.now() - startTime;
    console.log(`React app mounted successfully in ${mountTime.toFixed(2)}ms`);
    
    // Remove the fallback error message timeout since we mounted successfully
    const fallbackTimeout = (window as any).fallbackErrorTimeout;
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
    }
    
  } catch (error) {
    console.error('Error rendering React app:', error);
    
    // Enhanced error display
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'padding: 20px; color: red; font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; border: 1px solid red; border-radius: 5px; background: #fff5f5;';
    errorDiv.innerHTML = `
      <h2>Application Loading Error</h2>
      <p><strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <p>Please try:</p>
      <ul>
        <li>Refreshing the page (Ctrl+F5 or Cmd+Shift+R)</li>
        <li>Clearing your browser cache</li>
        <li>Checking your internet connection</li>
      </ul>
      <p>If the problem persists, contact support:</p>
      <p>📞 <a href="tel:+3225800325">+32 2 580 03 25</a> | 📧 <a href="mailto:info@locationautocar.be">info@locationautocar.be</a></p>
      <details style="margin-top: 20px;">
        <summary style="cursor: pointer;">Technical Details</summary>
        <pre style="background: #f5f5f5; padding: 10px; margin-top: 10px; overflow: auto; font-size: 12px;">${error instanceof Error ? error.stack : 'No stack trace available'}</pre>
      </details>
    `;
    
    document.body.innerHTML = '';
    document.body.appendChild(errorDiv);
    
    // Log to monitoring service if available
    if ((window as any).Sentry) {
      (window as any).Sentry.captureException(error);
    }
  }
}
