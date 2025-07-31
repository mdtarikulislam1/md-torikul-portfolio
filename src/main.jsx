import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/index.css'
import { RouterProvider } from 'react-router' 
import { router } from './Router/Route'

function AppWrapper() {
  return (
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
)
