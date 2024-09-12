import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Main from './pages/main.tsx'
import SubsidiaryCompany from './pages/about/SubsidiaryCompany.tsx'
import Responsibility from './pages/Responsibility.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  {
    path: '/about',
    children: [
      {
        path: 'subsidiaryCompany',
        element: <SubsidiaryCompany />,
      },
    ],
  },
  { path: '/responsibility', element: <Responsibility /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
