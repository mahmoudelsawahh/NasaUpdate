import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from './component/issTrack/lib/loading';
import * as serviceWorker from './serviceWorker';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <LoadingProvider>
        <App />
        </LoadingProvider>
    </BrowserRouter>
);
serviceWorker.unregister();
