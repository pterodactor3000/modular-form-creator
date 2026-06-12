import styled from 'styled-components'

export const ResourceOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const ResourceOverviewTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkStrong};
  margin: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`
