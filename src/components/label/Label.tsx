import { type LabelHTMLAttributes, type ReactNode } from 'react'
import { Typography } from '../typography'

import styles from './Label.module.css'

type Props = {
  label: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ id, label, ...htmlLabelProps }: Props) => {
  return (
    <label htmlFor={id} {...htmlLabelProps}>
      <Typography variant="label">
        {label}
        {htmlLabelProps['aria-required'] && (
          <span className={styles.RedStar}>*</span>
        )}
      </Typography>
    </label>
  )
}
