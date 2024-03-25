import * as yup from 'yup'

export const authSchema = yup.object({
  email: yup
    .string()
    .required('Email – обязательное поле')
    .email('Email должен быть корректным')
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Email должен быть действительным'),
  password: yup
    .string()
    .required('Пароль – обязательное поле')
    .matches(
      /^[^"'!?\\/,[\]{}()*&^%$:;@]+$/,
      'Пароль содержит недопустимые символы',
    )
    .min(6, 'Пароль должен быть длиной не менее 6 символов'),
})
