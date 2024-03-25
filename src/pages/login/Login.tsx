import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { Typography } from '@/components/typography'
import { ROUTES } from '@/constants/urls'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from '@/schema/authSchema'
import type { authForm } from '@/types/authForm'

import styles from './Login.module.css'

export const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(authSchema),
  })

  const onSubmit: SubmitHandler<authForm> = data => {
    console.log(data)
    reset()
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.InputWrapper}>
        <Typography tag="h1" variant="h1" className={styles.Title}>
          Войти в аккаунт
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
          <Input
            {...register('email')}
            id={'email'}
            label={'E-mail'}
            required
            type="email"
            errors={errors.email}
            className={styles.Input}
          />
          <Input
            {...register('password')}
            id={'password'}
            label={'Password'}
            required
            type="password"
            errors={errors.password}
            className={styles.Input}
          />
          <div className={styles.Link}>
            <Typography>Нет аккаунта?</Typography>
            <Link
              type="link"
              variant="accent"
              props={{ to: ROUTES.REGISTRATION }}
            >
              <Typography>Зарегестрируйтесь</Typography>
            </Link>
          </div>
          <Button type="submit" className={styles.Button}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}
