import { useParams } from 'react-router-dom'
import { ProjectDetails } from '../../components/ProjectDetails/ProjectDetails'
import { useResources } from '../../contexts/ResourcesContext'
import { DefaultStyledCard, ResourceTitle } from '../Layout/Layout.styles'

export const ResourceProjectDetailsPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()

  const { getResourceById } = useResources()
  const resource = getResourceById(parseInt(resourceId ?? ''))

  return (
    <>
      <ResourceTitle>Resource Project Details</ResourceTitle>
      <DefaultStyledCard variant="outline">
        {resource ? (
          <ProjectDetails {...resource.projectDetails} />
        ) : (
          <div>Resource not found</div>
        )}
      </DefaultStyledCard>
    </>
  )
}
