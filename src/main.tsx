import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './MainPge.tsx'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
    <Main />
    </ChakraProvider>
  </StrictMode>,
)
