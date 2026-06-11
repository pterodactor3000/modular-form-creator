import { useParams } from 'react-router-dom'
import { useResources } from '../../contexts/ResourcesContext'
import { ResourceDetails } from '../../components/ResourceDetails'
import { ActionButtonsContainer, ResourceTitle } from '../Layout/Layout.styles'
import { Button } from '../../../design-system'

export const ResourceOverviewPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()

  const { resourcesList, removeResource, provisionResource } = useResources()
  const resource = resourcesList.items.find(
    (resource) => resource.resourceId === parseInt(resourceId ?? ''),
  )

  return (
    <>
      {resource ? (
        <>
          <ResourceTitle>Resource Details</ResourceTitle>
          <ResourceDetails {...resource} />
        </>
      ) : (
        <ResourceTitle>Resource {resourceId} not found</ResourceTitle>
      )}

      <ActionButtonsContainer>
        <Button
          variant="secondary"
          onClick={() => {
            removeResource(parseInt(resourceId ?? ''))
          }}
        >
          Delete Resource
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            provisionResource(parseInt(resourceId ?? ''))
          }}
        >
          Provision Resource
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
