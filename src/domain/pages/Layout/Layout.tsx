import { Outlet } from 'react-router-dom'
import { ResourceLayoutContainer } from './Layout.styles'

export const Layout = () => {
  return (
    <ResourceLayoutContainer>
      <Outlet />
    </ResourceLayoutContainer>
  )
}
