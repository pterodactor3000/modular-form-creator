import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '../../../design-system'

export const Layout = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Button variant="ghost" onClick={() => navigate('/resources')}>
        ← Back to resources
      </Button>
      <Outlet />
    </div>
  )
}
