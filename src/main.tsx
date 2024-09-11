import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './pages/main.tsx'
import CardTitle from './components/card-title.tsx'

const router = createBrowserRouter([{ path: '/', element: <CardTitle /> }])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
