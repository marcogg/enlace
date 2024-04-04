import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Proyecta from './Pages/Proyecta.jsx'
import Profesional from './Pages/Profesional.jsx'
import Capitaliza from './Pages/Capitaliza.jsx'
import SeguroHogar from './Pages/SeguroHogar.jsx'
import SeguroGMM from './Pages/SeguroGMM.jsx'
import Auto from './Pages/Auto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/ahorro-para-retiro',
    element: <Proyecta />
  },
  {
    path: '/plan-de-ahorro-para-educacion',
    element: <Profesional />
  },
  {
    path: '/plan-de-inversion-para-ahorro',
    element: <Capitaliza />
  },
  {
    path: '/seguro-gastos-medicos-mayores',
    element: <SeguroGMM />
  },
  {
    path: '/seguro-para-hogar',
    element: <SeguroHogar />
  },
  {
    path: '/seguro-para-auto',
    element: <Auto />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
