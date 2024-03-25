import { memo, useState } from 'react'
import { Portal } from '../portal'
import { ROUTES } from '@/constants/urls'
import { Link } from '../link'
import cn from 'classnames'

import close from '@/assets/close.svg'

import styles from './Menu.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Menu = memo(({ isOpen, onClose }: Props) => {
  const [closing, setClosing] = useState(false)
  if (!isOpen) return null

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      onClose()
      setClosing(false)
    }, 290)
  }

  return (
    <Portal isOpen={isOpen}>
      <div
        className={cn({
          [styles.Overlay]: isOpen,
          [styles.OverlayClose]: closing,
        })}
        onClick={handleClose}
      >
        <div
          className={cn({
            [styles.Content]: isOpen,
            [styles.ContentClose]: closing,
          })}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.Wrapper}>
            <div className={styles.ButtonWrapper}>
              <button
                className={styles.Button}
                type="button"
                onClick={handleClose}
              >
                <img src={close} alt="close menu" />
              </button>
            </div>
            <nav className={styles.Menu}>
              <ul className={styles.Links}>
                <li className={styles.Link}>
                  <Link type="link" props={{ to: ROUTES.MAIN }}>
                    Главная
                  </Link>
                </li>
                <li className={styles.Link}>
                  <Link type="link" props={{ to: ROUTES.MENU }}>
                    Меню
                  </Link>
                </li>
              </ul>
              <Link type="link" props={{ to: ROUTES.LOGIN }}>
                Войти
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </Portal>
  )
})
