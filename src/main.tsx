import './styles/globals.css'

import React from 'react'
import * as Router from 'react-router-dom'
import * as ReactQuery from 'react-query'
import ReactDOM from 'react-dom/client'

import { queryClient } from './services/queryClient'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQuery.QueryClientProvider client={queryClient}>
      <Router.RouterProvider router={router} />
    </ReactQuery.QueryClientProvider>
  </React.StrictMode>
)
