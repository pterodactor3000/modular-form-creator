import type { ResourceProps } from '../../components/Resource'
import type { PaginationProps } from '../../components/Pagination/Pagination.types'

export type ResourcesList = {
  items: ResourceProps[]
  pagination: PaginationProps
}
