// ResourcesContext.ts
import { createContext, useContext } from 'react'
import type { ResourcesList } from '../pages/ResourcesListPage/ResourcesListPage.types'
import type { ResourcesContextType } from './ResourcesContext.types'

const initialResourcesList: ResourcesList = {
  items: [],
  pagination: {
    page: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0,
  },
}

const ResourcesContext = createContext<ResourcesContextType>({
  resourcesList: initialResourcesList,
  addResource: () => {},
  removeResource: () => {},
  editBasicInfo: () => {},
  editProjectDetails: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getResourceById: (resourceId: number) => null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provisionResource: (resourceId: number) => {},
  newResourceNameError: '',
  error: undefined,
})

const useResources = () => useContext(ResourcesContext)

export { ResourcesContext, useResources, initialResourcesList, type ResourcesContextType }
