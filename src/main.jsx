import { StrictMode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <ChakraProvider>

  <StrictMode>
    <App />
  </StrictMode>,
    </ChakraProvider>
  
)
