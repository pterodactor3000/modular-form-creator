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
  provisionResource: () => {},
  handlePageChange: () => {},
  newResourceNameError: '',
  error: undefined,
  activeResourceId: null,
  activeResourceBasicInfoFilled: false,
  activeResourceProjectDetailsFilled: false,
  updateActiveResourceId: () => {},
  updateActiveResourceModulesFilled: () => {},
  persistResource: () => {},
  getPersistedResource: () => null,
  removePersistedResource: () => {},
  updateResource: () => {},
  isResourcePersisted: () => false,
  isActiveResourceCompleted: false,
})

const useResources = () => useContext(ResourcesContext)

export { ResourcesContext, useResources, initialResourcesList, type ResourcesContextType }
