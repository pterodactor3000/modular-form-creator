import type { BasicInfoProps } from '../components/BasicInfo/BasicInfo.types'
import type { ProjectDetailsProps } from '../components/ProjectDetails/ProjectDetails.types'
import type { ResourceProps } from '../components/Resource/Resource.types'
import type { ResourcesList } from '../pages/ResourcesListPage/ResourcesListPage.types'

export type ResourcesContextType = {
  resourcesList: ResourcesList
  newResourceNameError: string
  error: string | undefined
  addResource: (resourceName: string) => void
  removeResource: (resourceId: number) => void
  editBasicInfo: (resourceId: number, basicInfo: BasicInfoProps) => void
  editProjectDetails: (resourceId: number, projectDetails: ProjectDetailsProps) => void
  provisionResource: (resourceId: number) => void
  handlePageChange: (page: number) => void
  activeResourceId: number | null
  activeResourceBasicInfoFilled: boolean
  activeResourceProjectDetailsFilled: boolean
  updateActiveResourceId: (resourceId: number) => void
  updateActiveResourceModulesFilled: (activeResource: ResourceProps) => void
  persistResource: (resource: ResourceProps) => void
  getPersistedResource: (resourceId: number) => ResourceProps | null
  removePersistedResource: (resourceId: number) => void
  updateResource: (resourceId: number) => void
  isResourcePersisted: (resourceId: number) => boolean
  isActiveResourceCompleted: boolean
}
