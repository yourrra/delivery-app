import cn from 'classnames'
import { Link } from '../link'
import { memo, type ImgHTMLAttributes } from 'react'
import { ROUTES } from '@/constants/urls'

import styles from './Logo.module.css'

import logo from '../../assets/logo.svg'

type Props = {
  variant?: 'big' | 'small'
} & ImgHTMLAttributes<HTMLImageElement>

export const Logo = memo(
  ({ variant = 'big', className = '', ...htmlImageProps }: Props) => {
    return (
      <Link type="link" props={{ to: ROUTES.MAIN }}>
        <img
          src={logo}
          className={cn(
            {
              [styles.isBig]: variant === 'big',
              [styles.isSmall]: variant === 'small',
            },
            className,
          )}
          {...htmlImageProps}
          alt={'Логотип'}
        />
      </Link>
    )
  },
)
