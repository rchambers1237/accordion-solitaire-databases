import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './router/Router';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <StrictMode>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </StrictMode>,
);
