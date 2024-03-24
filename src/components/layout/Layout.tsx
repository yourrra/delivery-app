import type { ReactNode } from 'react'

import styles from './Layout.module.css'
import { Header } from '../header'
import { Footer } from '../footer'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
