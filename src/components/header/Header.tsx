import { useLocation } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { Logo } from '../logo'
import { Link } from '../link'
import { ROUTES } from '@/constants/urls'
import { Menu } from '../menu'
import cn from 'classnames'

import styles from './Header.module.css'

import cart from '@/assets/cart.svg'
import menu from '@/assets/menu.svg'

export const Header = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header className={styles.Wrapper}>
      <nav className={styles.Header}>
        <div className={styles.HeaderRight}>
          <div className={styles.LogoBig}>
            <Logo />
          </div>
          <div className={styles.LogoSmall}>
            <Logo variant="small" />
          </div>
          <div className={styles.LinkLeft}>
            <Link
              type="link"
              props={{
                to: ROUTES.MAIN,
                className: cn(styles.Link, {
                  [styles.LinkActive]: pathname === ROUTES.MAIN,
                }),
              }}
            >
              Главная
            </Link>
            <Link
              type="link"
              props={{
                to: ROUTES.MENU,
                className: cn(styles.Link, {
                  [styles.LinkActive]: pathname === ROUTES.MENU,
                }),
              }}
            >
              Меню
            </Link>
          </div>
        </div>
        <div className={styles.LinkRight}>
          <div className={styles.CartIcon}>
            <Link
              type="link"
              icon={cart}
              props={{
                to: ROUTES.CART,
              }}
            />
          </div>
          <Link
            type="link"
            props={{
              to: ROUTES.LOGIN,
              className: styles.LogIn,
            }}
          >
            Войти
          </Link>
          <div className={styles.Menu}>
            <button type="button" className={styles.Burger} onClick={openModal}>
              <img src={menu} alt="Открыть меню" />
            </button>
            <Menu isOpen={isOpen} onClose={closeModal} />
          </div>
        </div>
      </nav>
    </header>
  )
}
