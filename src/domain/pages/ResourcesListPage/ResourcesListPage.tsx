import { useState } from 'react'
import { useResources } from '../../contexts/ResourcesContext'
import {
  ResourcesListPageContainer,
  ResourcesListPageTitle,
} from './ResourcesListPage.styles'
import { AddNewResource } from '../../components/AddNewResource'
import { ResourceCard } from '../../components/ResourceCard/ResourceCard'
import { Pagination } from '../../components/Pagination'

export const ResourcesListPage = () => {
  const { resourcesList, addResource, removeResource } = useResources()

  const [newResourceName, setNewResourceName] = useState('')

  const resourceNamePattern = /^[a-zA-Z0-9\s-]+$/
  const newResourceNameError =
    newResourceName.length > 0 && !resourceNamePattern.test(newResourceName)
      ? 'Resource name can contain only letters, numbers, spaces, and hyphens'
      : ''

  const handleRemoveResource = (resourceId: number) => {
    removeResource(resourceId)
  }

  const handleAddResource = (resourceName: string) => {
    addResource(resourceName)
    setNewResourceName('')
  }

  return (
    <>
      <ResourcesListPageTitle>
        Resources ({resourcesList.pagination.totalItems})
      </ResourcesListPageTitle>

      <ResourcesListPageContainer>
        <AddNewResource
          newResourceName={newResourceName}
          setNewResourceName={setNewResourceName}
          newResourceNameError={newResourceNameError}
          handleAddResource={handleAddResource}
        />
        {resourcesList.items
          ? resourcesList.items.map((resource) => (
              <ResourceCard
                key={resource.resourceId}
                resource={resource}
                handleRemoveResource={handleRemoveResource}
              />
            ))
          : null}
        <Pagination {...resourcesList.pagination} />
      </ResourcesListPageContainer>
    </>
  )
}
