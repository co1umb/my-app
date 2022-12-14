import { useState } from 'react'
import Misto from '../assets/images/Gdansk.jpg'

export const Image = () => {
  const [imageWidth, setImageWidth] = useState(500)
  const [imageAmount, setImageAmount] = useState(1)

  return (
    <>
      {[...Array(imageAmount)].map((image, i) => (
        <div className="img" key={i}>
          <a href="https://www.gdansk.pl/en/">
            <img
              src={Misto}
              alt="Misto"
              id="image"
              style={{ width: `${imageWidth}px` }}s
            />
          </a>
        </div>
      ))}
      <input
        type="button"
        value="Збільшити"
        className="but1"
        onClick={() => setImageWidth(imageWidth + 100)}
      />
      <input
        type="button"
        value="Зменшити"
        className="but2"
        onClick={() => setImageWidth(imageWidth - 100)}
      />
      <input
        type="button"
        disabled={!(!!imageAmount)}
        value="Видалити"
        className="but3"
        onClick={() => setImageAmount(imageAmount - 1)}
      />
      <input
        type="button"
        value="Додати"
        className="but4"
        onClick={() => setImageAmount(imageAmount + 1)}
      ></input>
    </>
  )
}
