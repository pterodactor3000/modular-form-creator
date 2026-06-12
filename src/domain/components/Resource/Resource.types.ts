import type { ProjectDetailsProps } from "../ProjectDetails"
import type { BasicInfoProps } from "../BasicInfo"

export type ResourceProps = {
  resourceId: number
  name: string
  status: 'draft' | 'completed'
  basicInfo: BasicInfoProps
  projectDetails: ProjectDetailsProps
  createdAt: string
  updatedAt: string
  __v: number
}
