import { useEffect, useState } from 'react'
import axios from 'axios'

import type { ResourcesList } from '../pages/ResourcesListPage/ResourcesListPage.types'
import { ResourcesContext, initialResourcesList } from '../contexts/ResourcesContext'
import { RESOURCES_API_BASE_URL } from './ResourcesProvider.constants'
import type { BasicInfoProps } from '../components/BasicInfo/BasicInfo.types'
import type { ProjectDetailsProps } from '../components/ProjectDetails/ProjectDetails.types'

export const ResourcesProvider = ({ children }: { children: React.ReactNode }) => {
  const [resourcesList, setResourcesList] = useState<ResourcesList>(initialResourcesList)
  const [newResourceNameError, setNewResourceNameError] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)

  const getResourceById = (resourceId: number) => {
    return (
      resourcesList.items.find((resource) => resource.resourceId === resourceId) ?? null
    )
  }

  const addResource = (resourceName: string) => {
    axios
      .post(RESOURCES_API_BASE_URL, { resourceName })
      .then((response) =>
        setResourcesList({
          ...resourcesList,
          items: [...resourcesList.items, response.data],
        }),
      )
      .catch((error) => setNewResourceNameError(error.response.data.message))
  }

  const removeResource = (resourceId: number) => {
    axios
      .delete(`${RESOURCES_API_BASE_URL}/${resourceId}`)
      .then((response) =>
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.filter(
            (item) => item.resourceId !== response.data.resourceId,
          ),
        }),
      )
      .catch((error) => console.error(error))
  }

  const editBasicInfo = (resourceId: number, basicInfo: BasicInfoProps) => {
    axios
      .patch(`${RESOURCES_API_BASE_URL}/${resourceId}/basic-info`, {
        resourceName: basicInfo.resourceName,
        owner: basicInfo.owner,
        email: basicInfo.email,
        description: basicInfo.description,
        priority: basicInfo.priority,
      })
      .then((response) =>
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.map((item) =>
            item.resourceId === resourceId ? response.data : item,
          ),
        }),
      )
      .catch((error) => setError(error.response.data.message))
  }

  const editProjectDetails = (
    resourceId: number,
    projectDetails: ProjectDetailsProps,
  ) => {
    axios
      .patch(`${RESOURCES_API_BASE_URL}/${resourceId}/project-details`, {
        projectName: projectDetails.projectName,
        budget: projectDetails.budget,
        category: projectDetails.category,
        options: projectDetails.options,
      })
      .then((response) =>
        setResourcesList({
          ...resourcesList,
          items: resourcesList.items.map((item) =>
            item.resourceId === resourceId ? response.data : item,
          ),
        }),
      )
      .catch((error) => setError(error.response.data.message))
  }

  const provisionResource = (resourceId: number) => {
    console.log('provision resource', resourceId)
  }

  useEffect(() => {
    axios
      .get(RESOURCES_API_BASE_URL)
      .then((response) => setResourcesList(response.data))
      .catch((error) => console.error(error))
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
        getResourceById,
        provisionResource,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  )
}
