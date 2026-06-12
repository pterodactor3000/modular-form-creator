import { Button } from '../../../design-system/components/Button'
import { useResources } from '../../contexts/ResourcesContext'
import type { PaginationProps } from './Pagination.types'

export const Pagination = (props: PaginationProps) => {
  const { handlePageChange } = useResources()

  const { page, totalPages } = props

  const goToPage = (page: number) => {
    handlePageChange(page)
  }

  return (
    <>
      {
        <nav aria-label="Resources pagination">
          <Button
            size="small"
            variant="ghost"
            disabled={page <= 1}
            onClick={() => goToPage(page - 1)}
          >
            &lt;
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            size="small"
            variant="ghost"
            disabled={page >= totalPages}
            onClick={() => goToPage(page + 1)}
          >
            &gt;
          </Button>
        </nav>
      }
    </>
  )
}
