import { Badge, Button } from '../../../design-system'
import type { ResourceProps } from '../Resource/Resource.types'
import { ResourceDetailsItem, ResourceDetailsLink } from './ResourceDetails.styles'
import {
  ActionButtonsContainer,
  DefaultStyledCard,
} from '../../pages/Layout/Layout.styles'

export const ResourceDetails = (resource: ResourceProps) => {
  return (
    <>
      <DefaultStyledCard variant="outline">
        <ResourceDetailsItem>
          <b>Name:</b> {resource.name}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>State:</b>
          <Badge variant={resource.status === 'draft' ? 'info' : 'success'}>
            {resource.status}
          </Badge>
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Created at:</b> {new Date(resource.createdAt).toLocaleString()}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Last updated at:</b> {new Date(resource.updatedAt).toLocaleString()}
        </ResourceDetailsItem>

        <hr style={{ width: '100%', margin: '10px 0', border: '1px solid #e0e0e0' }} />

        <ResourceDetailsItem>
          <b>Owner:</b> {resource.basicInfo.owner || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Email:</b> {resource.basicInfo.email || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Priority:</b> {resource.basicInfo.priority || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Description:</b> {resource.basicInfo.description || 'Not set'}
        </ResourceDetailsItem>

        <ActionButtonsContainer>
          <ResourceDetailsLink to={`/resources/${resource.resourceId}/basic-info`}>
            <Button variant="ghost">Edit Basic Info</Button>
          </ResourceDetailsLink>
        </ActionButtonsContainer>

        <hr style={{ width: '100%', margin: '10px 0', border: '1px solid #e0e0e0' }} />

        <ResourceDetailsItem>
          <b>Project Name:</b> {resource.projectDetails.projectName || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Budget:</b> {resource.projectDetails.budget || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Category:</b> {resource.projectDetails.category || 'Not set'}
        </ResourceDetailsItem>
        <ResourceDetailsItem>
          <b>Options:</b> {resource.projectDetails.options.join(', ') || 'Not set'}
        </ResourceDetailsItem>

        <ActionButtonsContainer>
          <ResourceDetailsLink to={`/resources/${resource.resourceId}/project-details`}>
            <Button variant="ghost">Edit Project Details</Button>
          </ResourceDetailsLink>
        </ActionButtonsContainer>
      </DefaultStyledCard>
    </>
  )
}
