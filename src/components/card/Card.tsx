import { Typography } from '../typography'

import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'

import styles from './Card.module.css'

type Item = {
  id: number
  name: string
  description: string
  preview: string
  price: string
}

type Props = {
  item: Item
}

export const Card = ({ item }: Props) => {
  const quantity = 0

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <img src={item.preview} alt={item.preview} className={styles.Img} />
        <div className={styles.Info}>
          <Typography variant="h3" className={styles.Title}>
            {item.name}
          </Typography>
          <Typography variant="normal" className={styles.Description}>
            {item.description}
          </Typography>
          <Typography variant="label" className={styles.Price}>
            {item.price} P
          </Typography>
        </div>
        <div className={styles.Buttons}>
          {quantity ? (
            <div className={styles.Quantity}>
              <button className={styles.Button}>
                <img src={minus} alt="minus" />
              </button>
              <Typography variant="h3">{'0'}</Typography>
              <button className={styles.Button}>
                <img src={plus} alt="plus" />
              </button>
            </div>
          ) : (
            <button type="button" className={styles.BtnToCart}>
              <Typography variant="label">Добавить в корзину</Typography>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
