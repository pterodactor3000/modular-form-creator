import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyles } from './design-system/theme/GlobalStyles'
import { theme } from './design-system/theme/theme'
import { router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
