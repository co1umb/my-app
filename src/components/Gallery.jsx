import Image1 from '../assets/images/1.jfif'
import Image2 from '../assets/images/2.jfif'
import Image3 from '../assets/images/3.jfif'
import Image4 from '../assets/images/4.jfif'
import Image5 from '../assets/images/5.jfif'
import Image6 from '../assets/images/6.jfif'
import { GoodsCard } from './GoodsCard'

const goods = [
  {
    image: Image1,
    price: 12,
    name: 'Grape',
  },
  {
    image: Image2,
    price: 13,
    name: 'Mango',
  },
  {
    image: Image3,
    price: 14,
    name: 'Lemon',
  },
  {
    image: Image4,
    price: 15,
    name: 'Banana',
  },
  {
    image: Image5,
    price: 16,
    name: 'Apple',
  },
  {
    image: Image6,
    price: 17,
    name: 'Pineapple',
  },
]

export const Gallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {goods.map((g) => (
        <GoodsCard name={g.name} price={g.price} image={g.image} key={g.name} />
      ))}
    </div>
  )
}
