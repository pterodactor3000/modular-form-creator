import { useParams } from "react-router-dom"

export const ResourceOverviewPage = () => {
  const { resourceId } = useParams<{ resourceId: string }>()
  
  return <div>ResourceOverviewPage {resourceId}</div>
}