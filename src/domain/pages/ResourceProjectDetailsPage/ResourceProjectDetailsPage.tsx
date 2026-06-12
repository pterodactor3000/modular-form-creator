import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { ProjectDetails } from '../../components/ProjectDetails/ProjectDetails'
import { useResources } from '../../contexts/ResourcesContext'
import { DefaultStyledCard, ResourceTitle } from '../Layout/Layout.styles'

export const ResourceProjectDetailsPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()

  const { resourcesList, updateActiveResourceId } = useResources()

  const activeResource =
    resourcesList.items.find(
      (resource) => resource.resourceId === parseInt(resourceId ?? ''),
    ) ?? null

  useEffect(() => {
    if (resourceId) {
      updateActiveResourceId(parseInt(resourceId ?? ''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceId])

  return (
    <>
      <ResourceTitle>Resource Project Details</ResourceTitle>
      <DefaultStyledCard variant="outline">
        {activeResource ? (
          <ProjectDetails {...activeResource.projectDetails} />
        ) : (
          <div>Resource not found</div>
        )}
      </DefaultStyledCard>
    </>
  )
}
