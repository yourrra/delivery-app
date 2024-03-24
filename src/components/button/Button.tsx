import cn from 'classnames'
import styles from './Button.module.css'
import { type PropsWithChildren, type ButtonHTMLAttributes } from 'react'

type Props = PropsWithChildren<
  {
    variant?: 'red' | 'blue'
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = ({
  variant = 'blue',
  children,
  className = '',
  ...htmlButtonProps
}: Props) => {
  return (
    <button
      className={cn(
        styles.Button,
        {
          [styles.isBlue]: variant === 'blue',
          [styles.isRed]: variant === 'red',
        },
        className,
      )}
      {...htmlButtonProps}
    >
      {children}
    </button>
  )
}
