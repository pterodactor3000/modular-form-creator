import { useNavigate } from "react-router-dom"

import { Button } from "../../../design-system"

export const ThankYou = () => {
  const navigate = useNavigate()
  return (
    <Button size="large" variant="primary" onClick={() => navigate('/resources')}>
      Thank you!
    </Button>
  )
}