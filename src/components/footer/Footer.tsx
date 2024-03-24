import { Link } from '../link'
import { Typography } from '../typography'
import { Logo } from '../logo'

import styles from './Footer.module.css'

import phone from '@/assets/phone.svg'
import mail from '@/assets/mail.svg'
import whatsAap from '@/assets/whatsApp.svg'

export const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <footer className={styles.Footer}>
        <Logo />
        <div>
          <Typography tag="p" variant="normal" className={styles.Contacts}>
            Обращайтесь к нам по любым вопросам по телефону! Мы всегда на связи.
            Наши контакты:
            <span></span>
          </Typography>
          <div className={styles.Links}>
            <Link
              type="a"
              props={{ href: 'tel:+80509379992' }}
              icon={phone}
              variant="accent"
            >
              +8 050 937 99 92
            </Link>
            <Link
              type="a"
              props={{
                href: 'mailto:restoran@gmail.com',
              }}
              icon={mail}
              variant="accent"
            >
              restoran@gmail.com
            </Link>
          </div>
        </div>
        <div>
          <Typography tag="h3" variant="h3" className={styles.Title}>
            Наши социальные сети:
          </Typography>
          <div className={styles.Social}>
            <Link
              type="a"
              props={{ href: 'https://www.whatsapp.com/' }}
              icon={whatsAap}
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
