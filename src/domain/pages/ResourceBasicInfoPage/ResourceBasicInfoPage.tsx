import { useParams } from 'react-router-dom'
import { BasicInfo } from '../../components/BasicInfo/BasicInfo'
import { useResources } from '../../contexts/ResourcesContext'
import { DefaultStyledCard, ResourceTitle } from '../Layout/Layout.styles'
import { useEffect } from 'react'

export const ResourceBasicInfoPage = () => {
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
  }, [])

  return (
    <>
      <ResourceTitle>Resource Basic Info</ResourceTitle>
      <DefaultStyledCard variant="outline">
        {activeResource ? (
          <BasicInfo {...activeResource.basicInfo} />
        ) : (
          <div>Resource not found</div>
        )}
      </DefaultStyledCard>
    </>
  )
}
