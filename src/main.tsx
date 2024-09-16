import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './pages/main.tsx'
import Archives from './pages/Archives.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/story/archives', element: <Archives /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
