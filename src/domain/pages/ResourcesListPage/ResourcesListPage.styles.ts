import styled from 'styled-components'

export const ResourcesListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const ResourcesListPageTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkStrong};
  margin: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`
