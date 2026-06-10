import { Badge, Card } from '../../../design-system'
import { BasicInfo } from '../BasicInfo'
import { ProjectDetails } from '../ProjectDetails'
import type { ResourceProps } from './Resource.types'

export const Resource = (props: ResourceProps) => {
  const { resourceId, name, status, basicInfo, projectDetails } = props
  return (
    <Card>
      <h2>{name}</h2>
      <Badge variant={status === 'draft' ? 'info' : 'success'}>{status}</Badge>
      <BasicInfo {...basicInfo} />
      <ProjectDetails {...projectDetails} />
    </Card>
  )
}
