import { createBrowserRouter } from 'react-router-dom'

import { ResourcesListPage } from './domain/pages/ResourcesListPage'
import { ResourceOverviewPage } from './domain/pages/ResourceOverviewPage'

import App from './App'
import { Layout } from './domain/pages/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { 
    path: '/resources', element: <ResourcesListPage />,
  },
  { 
    path: '/resources/:resourceId', element: <Layout />,
    children: [
      { index: true, element: <ResourceOverviewPage /> },
      // { path: ':resourceId/basic-info', element: <ResourceBasicInfoPage /> },
      // { path: ':resourceId/project-details', element: <ResourceProjectDetailsPage /> },
    ]
   },
])