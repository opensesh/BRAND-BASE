import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/fonts.css'
import './styles/tokens.css'
import './styles/globals.css'
import App from './App.tsx'
import AppTest from './AppTest.tsx'

const Preview = lazy(() => import('./preview/Preview'))

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/test', element: <AppTest /> },
  { path: '/preview', element: <Suspense fallback={<div className="p-6">Loading…</div>}><Preview /></Suspense> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
