import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserDataProvider from './context/UserContext'; 
import UserContext from './context/UserContext';
import CaptainContext from './context/CaptainContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
        <UserDataProvider> 
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserDataProvider>
      </UserContext>
    </CaptainContext>
  </StrictMode>
);
