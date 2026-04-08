import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import KeycloakProvider from './auth/KeycloakProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <KeycloakProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </KeycloakProvider>
    </React.StrictMode>
);