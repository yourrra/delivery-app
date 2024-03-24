import type { ReactNode } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'

import styles from './Layout.module.css'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </div>
  )
}
