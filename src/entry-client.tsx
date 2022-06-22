import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'uno.css';
import '~/assets/style/reset.css';
import { getLazyRoutes } from '~/routes';
import HeadProvider from '~/providers/HeadProvider';

const routes = getLazyRoutes();

const container = document.getElementById('app')!;
const entry = (
  <React.StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App routes={routes} />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>
);

// Client-side rendering in development, SSG in production
if (import.meta.env.PROD) {
  ReactDOM.hydrateRoot(container, entry);
} else {
  ReactDOM.createRoot(container).render(entry);
}
