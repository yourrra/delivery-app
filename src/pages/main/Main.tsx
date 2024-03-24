import { Link } from '@/components/Link'
import { Typography } from '@/components/typography'
import { ROUTES } from '@/constants/urls'

export const Main = () => {
  return (
    <div>
      <Typography tag="h1" variant="h1">
        Main
      </Typography>
      <Link type="link" props={{ to: ROUTES.MENU }}>
        Menu
      </Link>
    </div>
  )
}
