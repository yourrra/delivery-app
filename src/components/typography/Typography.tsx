import cn from 'classnames'
import type { PropsWithChildren, HTMLAttributes } from 'react'

import styles from './Typography.module.css'

type Props = PropsWithChildren<
  {
    variant?: 'special' | 'h1' | 'h2' | 'h3' | 'normal' | 'link' | 'label'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  } & HTMLAttributes<HTMLParagraphElement>
>

export const Typography = ({
  variant = 'normal',
  tag = 'p',
  children,
  className = '',
  ...htmlProps
}: Props) => {
  const Tag = tag
  return (
    <Tag
      className={cn(
        styles.Typography,
        {
          [styles.isSpecial]: variant === 'special',
          [styles.isH1]: variant === 'h1',
          [styles.isH2]: variant === 'h2',
          [styles.isH3]: variant === 'h3',
          [styles.isNormal]: variant === 'normal',
          [styles.isLink]: variant === 'link',
          [styles.isLabel]: variant === 'label',
        },
        className,
      )}
      {...htmlProps}
    >
      {children}
    </Tag>
  )
}
