import styled from 'styled-components'
import { Card } from '../../../design-system'

export const AddNewResourceContainer = styled.div`
  color: ${({ theme }) => theme.colors.ink};
  max-width: 700px;
  width: 100%;
`

export const ResourceEmptyCard = styled(Card)`
  width: 100%;
  max-width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > span {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`
