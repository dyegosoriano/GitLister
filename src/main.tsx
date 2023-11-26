import 'react-toastify/dist/ReactToastify.css'
import './styles/globals.css'

import React from 'react'
import { ToastContainer } from 'react-toastify'
import * as Router from 'react-router-dom'
import * as ReactQuery from 'react-query'
import ReactDOM from 'react-dom/client'

import { UserProvider } from './context/UserContext'
import { queryClient } from './services/queryClient'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <Router.RouterProvider router={router} />
      </ReactQuery.QueryClientProvider>
    </UserProvider>

    <ToastContainer />
  </React.StrictMode>
)
