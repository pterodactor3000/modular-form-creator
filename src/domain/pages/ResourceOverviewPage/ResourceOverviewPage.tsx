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
  } = useResources()

  const activeResource = resourcesList.items.find(
    (resource) => resource.resourceId === parseInt(resourceId ?? ''),
  )

  const handleProvisionResource = () => {
    provisionResource(parseInt(resourceId ?? ''))
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
        <Button
          disabled={
            !activeResourceBasicInfoFilled ||
            !activeResourceProjectDetailsFilled ||
            activeResource?.status === 'completed'
          }
          variant="primary"
          onClick={handleProvisionResource}
          title={
            !activeResourceBasicInfoFilled || !activeResourceProjectDetailsFilled
              ? 'You need to fill in the basic info and project details first'
              : activeResource?.status === 'completed'
                ? 'Resource is already completed, cannot provision again'
                : ''
          }
        >
          Provision Resource
        </Button>
      </ActionButtonsContainer>
    </>
  )
}
