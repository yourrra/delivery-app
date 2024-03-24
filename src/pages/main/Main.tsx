import { Button } from '@/components/button'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
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
      <Logo />
      <Button>Main</Button>
      <Button variant="red">Main</Button>
    </div>
  )
}
