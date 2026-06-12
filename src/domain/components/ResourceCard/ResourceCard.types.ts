import type { ResourceProps } from '../Resource'

export type ResourceCardProps = {
  resource: ResourceProps
  handleRemoveResource: (resourceId: number) => void
}
