import React from 'react'

export class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor1: 'white',
      textColor1: 'black',
      backgroundColor2: 'white',
      textColor2: 'black',
    }
  }

  changeColor1() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor1: textColor, backgroundColor1: 'red' })
  }

  changeColor2() {
    const textColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`
    this.setState({ textColor2: textColor, backgroundColor2: 'black' })
  }

  render() {
    return (
      <>
        <div>Місце народження: 18 червня, 2001 року, м. Київ</div>
        <ul>
        Освіта: :
          <li id="elem">
            <div
              onClick={() => this.changeColor1()}
              style={{
                backgroundColor: this.state.backgroundColor1,
                color: this.state.textColor1,
              }}
            >
              Спеціалізована школа № 31 м. Києва з поглибленим вивченням предметів природничо-математичного циклу І-ІІІ ступенів
            </div>
          </li>
          <li id="elem2">
            <div
              onClick={() => this.changeColor2()}
              style={{
                backgroundColor: this.state.backgroundColor2,
                color: this.state.textColor2,
              }}
            >
              Університет: КПІ ФІОТ 126
            </div>
          </li>
        </ul>
        <ul>
          Хобі:
          <li>Відеоігри</li>
          <li>Спорт</li>
          <li>Кіно</li>
        </ul>
        <ul>
          Улюблені фільми:
          <ol type="1">
            <li>Втеча з Шоушенка</li>
            <li>Хрещений батько</li>
            <li>Тарас Бульба</li>
          </ol>
        </ul>
        <div>
        Гданськ — місто на півночі Польщі, лежить на березі Гданської затоки Балтійського моря, у гирлі річки Вісла, столиця Поморського воєводства.
        <p></p>Гданськ — культурний, науковий та господарчий центр, а також потужний транспортний вузол Північної Польщі. Місто є великим портом на Балтійському морі, центр промисловості, зокрема нафтохімічної і машинобудування (розвинені суднобудування і судноремонт).
        </div>
      </>
    )
  }
}
