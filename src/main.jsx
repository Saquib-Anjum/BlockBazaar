import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CoinContextProvider from './context/CoinContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <CoinContextProvider>
   <App />
   </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
