import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { Typography } from '@/components/typography'
import { ROUTES } from '@/constants/urls'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from '@/schema/authSchema'
import type { authForm } from '@/types/authForm'

import styles from './Registration.module.css'

export const Registration = () => {
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
          Регистрация
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
            <Typography>Уже зарегестрированы?</Typography>
            <Link type="link" variant="accent" props={{ to: ROUTES.LOGIN }}>
              <Typography>Войдите в аккаунт</Typography>
            </Link>
          </div>
          <Button type="submit" variant="red" className={styles.Button}>
            Зарегестрироваться
          </Button>
        </form>
      </div>
    </div>
  )
}
