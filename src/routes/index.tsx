import * as Router from 'react-router-dom'

import { Repository } from '../pages/Repository'
import { Home } from '../pages/Home'

export const router = Router.createBrowserRouter(
  Router.createRoutesFromElements([
    <Router.Route key="/repository" path="/repository/:full_name" element={<Repository />} />,
    <Router.Route key="/" path="/" element={<Home />} />
  ])
)
