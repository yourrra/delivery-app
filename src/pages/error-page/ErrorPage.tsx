import { useRouteError } from 'react-router-dom'

import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
