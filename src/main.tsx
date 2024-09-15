import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import reset from './styles/reset.ts'
import { Global } from '@emotion/react'

import Main from './pages/main.tsx'
import SubsidiaryCompany from './pages/about/SubsidiaryCompany.tsx'
import Milestones from './pages/about/Milestones.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={reset} />
    <RouterProvider router={router} />
  </StrictMode>,
)
