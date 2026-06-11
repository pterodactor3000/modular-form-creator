import { Button } from '../../../design-system/components/Button'
import { Input } from '../../../design-system/components/Input'
import { AddNewResourceContainer, ResourceEmptyCard } from './AddNewResource.styles'
import type { AddNewResourceProps } from './AddNewResource.types'

export const AddNewResource = ({
  newResourceName,
  setNewResourceName,
  newResourceNameError,
  handleAddResource,
}: AddNewResourceProps) => {
  return (
    <AddNewResourceContainer>
      <ResourceEmptyCard>
        <Input
          placeholder="Enter new resource name..."
          value={newResourceName}
          onChange={(e) => setNewResourceName(e.target.value)}
          error={newResourceNameError || undefined}
        />
        <Button
          variant="secondary"
          size="small"
          disabled={!newResourceName || !!newResourceNameError}
          onClick={() => {
            handleAddResource(newResourceName)
          }}
        >
          Create
        </Button>
      </ResourceEmptyCard>
    </AddNewResourceContainer>
  )
}
