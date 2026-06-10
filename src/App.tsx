import styled from 'styled-components'
import { ThankYou } from './domain/components/ThankYou'

function App() {
  return (
    <AppShell>
      <Message>Good luck!</Message>
      <ThankYou />
    </AppShell>
  )
}

const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Message = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.inkStrong};
`

export default App
