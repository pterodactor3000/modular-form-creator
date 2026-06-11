import { useParams } from 'react-router-dom'
import { BasicInfo } from '../../components/BasicInfo/BasicInfo'
import { useResources } from '../../contexts/ResourcesContext'
import { DefaultStyledCard, ResourceTitle } from '../Layout/Layout.styles'

export const ResourceBasicInfoPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()

  const { getResourceById } = useResources()
  const resource = getResourceById(parseInt(resourceId ?? ''))

  return (
    <>
      <ResourceTitle>Resource Basic Info</ResourceTitle>
      <DefaultStyledCard variant="outline">
        {resource ? <BasicInfo {...resource.basicInfo} /> : <div>Resource not found</div>}
      </DefaultStyledCard>
    </>
  )
}
