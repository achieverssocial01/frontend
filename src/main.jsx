import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ContextProvider from './Components/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <ContextProvider>
    <App />
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)