import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ResourceDetailsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-wrap: wrap;
`

export const ResourceDetailsLink = styled(Link)`
  text-align: right;
`
