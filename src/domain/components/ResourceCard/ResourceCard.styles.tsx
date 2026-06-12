import styled from 'styled-components'
import { IconButton } from '../../../design-system'
import { Link } from 'react-router-dom'
import { DefaultStyledCard } from '../../pages/Layout/Layout.styles'

export const StyledResourceCard = styled(DefaultStyledCard)`
  max-width: inherit;
  flex-direction: row;
  justify-content: space-between;

  & > span {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.xs};

    & > h2 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 500px;
    }
  }
`

export const StyledResourceLink = styled(Link)`
  color: ${({ theme }) => theme.colors.ink};
  max-width: 700px;
  width: 100%;
`

export const StyledResourceIconButtonRemove = styled(IconButton)`
  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
  width: 32px;
  height: 32px;
  font-size: 0.95rem;
`
