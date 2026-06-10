import type { BasicInfoProps } from './BasicInfo.types'

export const BasicInfo = (props: BasicInfoProps) => {
  const { resourceName, owner, email, description, priority } = props
  return (
    <div>
      <h3>{resourceName}</h3>
      <p>{owner}</p>
      <p>{email}</p>
      <p>{description}</p>
      <p>{priority}</p>
    </div>
  )
}