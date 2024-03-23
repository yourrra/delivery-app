import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './constants/urls'
import { Main } from './pages/main'
import { Menu } from './pages/menu'
import { Cart } from './pages/cart'
import { ErrorPage } from './pages/error-page'

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.MENU,
    element: <Menu />,
  },
  {
    path: ROUTES.CART,
    element: <Cart />,
  },
])
