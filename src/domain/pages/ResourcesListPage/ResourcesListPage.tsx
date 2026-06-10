import {
  ResourcesListPageContainer,
  ResourcesListPageTitle,
  ResourcesListPageCard,
  ResourcesListPageLink,
} from './ResourcesListPage.styles'
import type { ResourcesListPageProps } from './ResourceListPage.types'

export const ResourcesListPage = (args: ResourcesListPageProps) => {
  const { resources, pagination } = args

  return (
    <>
      <ResourcesListPageTitle>Resources</ResourcesListPageTitle>
      <ResourcesListPageContainer>
        {resources
          ? resources.map((resource) => (
              <ResourcesListPageLink to={`/resources/${resource.resourceId}`}>
                <ResourcesListPageCard>
                  <h2>{resource.name}</h2>
                </ResourcesListPageCard>
              </ResourcesListPageLink>
            ))
          : null}
      </ResourcesListPageContainer>
    </>
  )
}
