import { useEffect, useState } from 'react'
import axios from 'axios'

import type { ResourcesList } from '../pages/ResourcesListPage/ResourcesListPage.types'
import { ResourcesContext, initialResourcesList } from '../contexts/ResourcesContext'
import { RESOURCES_API_BASE_URL } from './ResourcesProvider.constants'
import type { BasicInfoProps } from '../components/BasicInfo/BasicInfo.types'
import type { ProjectDetailsProps } from '../components/ProjectDetails/ProjectDetails.types'
import type { ResourceProps } from '../components/Resource/Resource.types'

export const ResourcesProvider = ({ children }: { children: React.ReactNode }) => {
  const [resourcesList, setResourcesList] = useState<ResourcesList>(initialResourcesList)
  const [newResourceNameError, setNewResourceNameError] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeResourceId, setActiveResourceId] = useState<number | null>(null)
  const [activeResourceBasicInfoFilled, setActiveResourceBasicInfoFilled] =
    useState(false)
  const [activeResourceProjectDetailsFilled, setActiveResourceProjectDetailsFilled] =
    useState(false)

  const getResourcesList = (page: number, pageSize: number) => {
    axios
      .get(RESOURCES_API_BASE_URL, { params: { page, pageSize } })
      .then((response) => setResourcesList(response.data))
      .catch((error) => setError(error.response.data.message))
  }

  const addResource = (resourceName: string) => {
    axios
      .post(RESOURCES_API_BASE_URL, { resourceName })
      .then(() => getResourcesList(currentPage, 10))
      .catch((error) => setNewResourceNameError(error.response.data.message))
  }

  const removeResource = (resourceId: number) => {
    const confirmed = confirm('Are you sure you want to remove this resource?')
    if (!confirmed) return

    axios
      .delete(`${RESOURCES_API_BASE_URL}/${resourceId}`)
      .then(() => getResourcesList(currentPage, 10))
      .catch((error) => console.error(error))
  }

  const editBasicInfo = (resourceId: number, basicInfo: BasicInfoProps) => {
    setError(undefined)
    axios
      .patch(`${RESOURCES_API_BASE_URL}/${resourceId}/basic-info`, {
        resourceName: basicInfo.resourceName,
        owner: basicInfo.owner,
        email: basicInfo.email,
        description: basicInfo.description,
        priority: basicInfo.priority,
      })
      .then((response) => {
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.map((item) =>
            item.resourceId === resourceId ? response.data : item,
          ),
        })
        updateActiveResourceModulesFilled(response.data)
      })
      .catch((error) => setError(error.response.data.message))
  }

  const editProjectDetails = (
    resourceId: number,
    projectDetails: ProjectDetailsProps,
  ) => {
    setError(undefined)
    axios
      .patch(`${RESOURCES_API_BASE_URL}/${resourceId}/project-details`, {
        projectName: projectDetails.projectName,
        budget: projectDetails.budget,
        category: projectDetails.category,
        options: projectDetails.options,
      })
      .then((response) => {
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.map((item) =>
            item.resourceId === resourceId ? response.data : item,
          ),
        })
        updateActiveResourceModulesFilled(response.data)
      })
      .catch((error) => setError(error.response.data.message))
  }

  const provisionResource = (resourceId: number) => {
    setError(undefined)
    axios
      .patch(`${RESOURCES_API_BASE_URL}/${resourceId}/provisioning`)
      .then((response) => {
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.map((item) =>
            item.resourceId === resourceId ? response.data : item,
          ),
        })
      })
      .catch((error) => {
        window.alert(error.response.data.message)
        setError(error.response.data.message)
      })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    getResourcesList(page, 10)
  }

  const updateActiveResourceId = (resourceId: number) => {
    if (!resourceId) return

    const activeResource = resourcesList.items.find(
      (resource) => resource.resourceId === resourceId,
    )

    if (!activeResource) return

    setActiveResourceId(resourceId)
    updateActiveResourceModulesFilled(activeResource)
  }

  const updateActiveResourceModulesFilled = (activeResource: ResourceProps) => {
    setActiveResourceBasicInfoFilled(
      activeResource.basicInfo.owner !== '' &&
        activeResource.basicInfo.email !== '' &&
        activeResource.basicInfo.priority !== '' &&
        activeResource.basicInfo.description !== '',
    )
    setActiveResourceProjectDetailsFilled(
      activeResource.projectDetails.projectName !== '' &&
        activeResource.projectDetails.budget !== '' &&
        activeResource.projectDetails.category !== '' &&
        activeResource.projectDetails.options.length > 0,
    )
  }

  useEffect(() => {
    getResourcesList(1, 10)
  }, [])

  return (
    <ResourcesContext.Provider
      value={{
        resourcesList,
        error,
        addResource,
        removeResource,
        editBasicInfo,
        editProjectDetails,
        newResourceNameError,
        provisionResource,
        handlePageChange,
        activeResourceId,
        activeResourceBasicInfoFilled,
        activeResourceProjectDetailsFilled,
        updateActiveResourceId,
        updateActiveResourceModulesFilled,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  )
}
