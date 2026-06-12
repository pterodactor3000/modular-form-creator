import { Badge } from '../../../design-system'
import {
  StyledResourceCard,
  StyledResourceLink,
  StyledResourceIconButtonRemove,
} from './ResourceCard.styles'
import type { ResourceCardProps } from './ResourceCard.types'

export const ResourceCard = ({ resource, handleRemoveResource }: ResourceCardProps) => {
  return (
    <StyledResourceLink
      title={`Click to view resource ${resource.name}`}
      to={`/resources/${resource.resourceId}/details`}
    >
      <StyledResourceCard key={resource.resourceId}>
        <span>
          <h2>{resource.name}</h2>
          <Badge variant={resource.status === 'draft' ? 'info' : 'success'}>
            {resource.status}
          </Badge>
        </span>
        <span>
          <StyledResourceIconButtonRemove
            variant="ghost"
            size="small"
            state="normal"
            title="Remove resource"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleRemoveResource(resource.resourceId)
            }}
          >
            &#128473;
          </StyledResourceIconButtonRemove>
        </span>
      </StyledResourceCard>
    </StyledResourceLink>
  )
}
