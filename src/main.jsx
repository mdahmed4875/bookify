import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { FirebaseProvider } from './context/Firebase.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
    </BrowserRouter>
  </StrictMode>,
)
