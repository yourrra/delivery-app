import { Card } from '@/components/card'
import { Layout } from '@/components/layout'

import styles from './Menu.module.css'

import pasta from '@/assets/pasta.jpg'

const textArr = [
  {
    id: 1,
    name: 'Паста карбонара',
    preview: pasta,
    description:
      'Паста — блюдо итальянской кухни, состоящее из двух основных компонентов: любого макаронного изделия и соуса.',
    price: '750',
  },
  {
    id: 2,
    name: 'Паста карбонара',
    preview: pasta,
    description:
      'Паста — блюдо итальянской кухни, состоящее из двух основных компонентов: любого макаронного изделия и соуса.',
    price: '750',
  },
  {
    id: 3,
    name: 'Паста карбонара',
    preview: pasta,
    description:
      'Паста — блюдо итальянской кухни, состоящее из двух основных компонентов: любого макаронного изделия и соуса.',
    price: '750',
  },
  {
    id: 4,
    name: 'Паста карбонара',
    preview: pasta,
    description:
      'Паста — блюдо итальянской кухни, состоящее из двух основных компонентов: любого макаронного изделия и соуса.',
    price: '750',
  },
]

export const Menu = () => {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        {textArr.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  )
}
