import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextProvide } from './Context/MyStore.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ContextProvide>
    <App/>
    </ContextProvide>
    </BrowserRouter>

)
