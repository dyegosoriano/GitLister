import './styles/globals.css'

import React from 'react'
import * as Router from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router.RouterProvider router={router} />
  </React.StrictMode>
)
