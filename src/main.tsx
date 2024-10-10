import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reset from './styles/reset.ts'
import { Global } from '@emotion/react'

import Main from './pages/main.tsx'
import Archives from './pages/Archives.tsx'
import SubsidiaryCompany from './pages/about/SubsidiaryCompany.tsx'
import Responsibility from './pages/Resposibility.tsx'
import Milestones from './pages/about/Milestones.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/story/archives', element: <Archives /> },
  {
    path: '/about',
    children: [
      {
        path: 'subsidiaryCompany',
        element: <SubsidiaryCompany />,
      },
      {
        path: 'milestones',
        element: <Milestones />,
      },
    ],
  },
  { path: '/responsibility', element: <Responsibility /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={reset} />
    <RouterProvider router={router} />
  </StrictMode>,
)
