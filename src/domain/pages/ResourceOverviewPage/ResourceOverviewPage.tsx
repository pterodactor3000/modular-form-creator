import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useResources } from '../../contexts/ResourcesContext'
import { ResourceDetails } from '../../components/ResourceDetails'
import { ActionButtonsContainer, ResourceTitle } from '../Layout/Layout.styles'
import { Button } from '../../../design-system'

export const ResourceOverviewPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()
  const navigate = useNavigate()
  const {
    removeResource,
    provisionResource,
    updateActiveResourceId,
    activeResourceId,
    activeResourceBasicInfoFilled,
    activeResourceProjectDetailsFilled,
    resourcesList,
    updateActiveResourceModulesFilled,
    updateResource,
    isResourcePersisted,
    getPersistedResource,
    error,
  } = useResources()

  const activeResource = isResourcePersisted(parseInt(resourceId ?? ''))
    ? getPersistedResource(parseInt(resourceId ?? ''))
    : resourcesList.items.find(
        (resource) => resource.resourceId === parseInt(resourceId ?? ''),
      )

  const handleProvisionResource = () => {
    provisionResource(parseInt(resourceId ?? ''))
    navigate('/resources')
  }

  const handleUpdateResource = () => {
    updateResource(parseInt(resourceId ?? ''))
    navigate('/resources')
  }

  useEffect(() => {
    if (activeResource) {
      updateActiveResourceModulesFilled(activeResource)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeResource])

  useEffect(() => {
    if (resourceId && parseInt(resourceId ?? '') !== activeResourceId) {
      updateActiveResourceId(parseInt(resourceId ?? ''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceId])

  return (
    <>
      {activeResource ? (
        <>
          <ResourceTitle>Resource Details</ResourceTitle>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <ResourceDetails {...activeResource} />
        </>
      ) : (
        <ResourceTitle>Resource {resourceId} not found</ResourceTitle>
      )}

      <ActionButtonsContainer>
        <Button
          variant="secondary"
          onClick={() => {
            removeResource(parseInt(resourceId ?? ''))
            navigate('/resources')
          }}
        >
          Delete Resource
        </Button>
        {activeResource?.status === 'draft' ? (
          <Button
            disabled={
              !activeResourceBasicInfoFilled || !activeResourceProjectDetailsFilled
            }
            variant="primary"
            onClick={handleProvisionResource}
            title={
              !activeResourceBasicInfoFilled || !activeResourceProjectDetailsFilled
                ? 'You need to fill in the basic info and project details first'
                : ''
            }
          >
            Provision Resource
          </Button>
        ) : (
          <Button
            disabled={!isResourcePersisted(parseInt(resourceId ?? ''))}
            variant="primary"
            onClick={handleUpdateResource}
            title={
              !isResourcePersisted(parseInt(resourceId ?? ''))
                ? 'Resource is not changed, cannot update'
                : 'Update resource'
            }
          >
            Update
          </Button>
        )}
      </ActionButtonsContainer>
    </>
  )
}
