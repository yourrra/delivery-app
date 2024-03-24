import type { ReactNode } from 'react'

import styles from './Layout.module.css'

type Props = {
  children: ReactNode
  header: ReactNode
  footer: ReactNode
}

export const Layout = ({ children, header, footer }: Props) => {
  return (
    <div className={styles.Layout}>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  )
}
