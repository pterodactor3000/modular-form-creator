import styled from 'styled-components'
import { Card } from '../../../design-system'

export const ResourceLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.sm};
`

export const DefaultStyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};

  & > button {
    align-self: flex-end;
  }
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`

export const BasicItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-wrap: wrap;

  & > div {
    width: 50%;
  }
`

export const ResourceTitle = styled.h2`
  width: 100%;
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.inkStrong};
  margin: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`
