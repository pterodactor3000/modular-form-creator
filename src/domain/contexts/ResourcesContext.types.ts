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
  getResourceById: (resourceId: number) => ResourceProps | null
  provisionResource: (resourceId: number) => void
}
