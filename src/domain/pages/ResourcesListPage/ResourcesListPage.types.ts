import type { ResourceProps } from '../../components/Resource'
import type { PaginationProps } from '../../components/Pagination'

export type ResourcesList = {
  items: ResourceProps[]
  pagination: PaginationProps
}
