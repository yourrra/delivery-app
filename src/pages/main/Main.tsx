import { Layout } from '@/components/layout'
import { Typography } from '@/components/typography'
import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { ROUTES } from '@/constants/urls'

import styles from './Main.module.css'

export const Main = () => {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <Typography tag="h1" variant="special" className={styles.Heading}>
          Welcome to the best establishment!
        </Typography>
        <div className={styles.Info}>
          <Typography variant="h2" className={styles.Description}>
            Для оформления заказа необходимо войти в аккаунт или
            зарегистрироваться
          </Typography>
          <Button variant="red">
            <Link
              type="link"
              props={{ to: ROUTES.LOGIN, className: styles.ButtonLink }}
            >
              Войти
            </Link>
          </Button>
        </div>
        <div className={styles.Info}>
          <Typography variant="h2" className={styles.Description}>
            С нашим меню можете ознакомиться по ссылке ниже
          </Typography>
          <Button>
            <Link
              type="link"
              props={{ to: ROUTES.MENU, className: styles.ButtonLink }}
            >
              Меню
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}
