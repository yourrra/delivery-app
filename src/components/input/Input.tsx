import { type InputHTMLAttributes, memo, forwardRef } from 'react'
import { Label } from '../label/Label'
import cn from 'classnames'

import styles from './Index.module.css'

type Props = {
  label?: string
  id: string
  errors?: any
  required?: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    (
      { label, errors, id, required, className = '', ...htmlInputProps },
      ref,
    ) => {
      return (
        <div className={styles.Wrapper}>
          {label && (
            <Label label={label} htmlFor={id} aria-required={required} />
          )}

          <input
            placeholder={label}
            id={id}
            className={cn(
              styles.Input,
              {
                [styles.isInputError]: errors,
              },
              className,
            )}
            ref={ref}
            {...htmlInputProps}
          />
          {errors && (
            <div className={styles.Position}>
              <span className={styles.Error}>{errors.message}</span>
            </div>
          )}
        </div>
      )
    },
  ),
)
