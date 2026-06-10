import type { ResourceProps } from '../../components/Resource'

export type Pagination = {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export type ResourcesListPageProps = {
  resources: ResourceProps[]
  pagination: Pagination
}
