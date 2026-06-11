import { createBrowserRouter } from 'react-router-dom'

import { ResourcesListPage } from './domain/pages/ResourcesListPage'
import { ResourceOverviewPage } from './domain/pages/ResourceOverviewPage'

import App from './App'
import { Layout, ResourceBasicInfoPage, ResourceProjectDetailsPage } from './domain/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/resources',
    element: <ResourcesListPage />,
  },
  {
    path: '/resources/:resourceId',
    element: <Layout />,
    children: [
      { path: 'details', element: <ResourceOverviewPage /> },
      { path: 'basic-info', element: <ResourceBasicInfoPage /> },
      { path: 'project-details', element: <ResourceProjectDetailsPage /> },
    ],
  },
])
