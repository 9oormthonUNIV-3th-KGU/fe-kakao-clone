import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Main from './pages/main.tsx'
import SubsidiaryCompany from './pages/about/subsidiaryCompany.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/about/subsidiaryCompany', element: <SubsidiaryCompany /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
