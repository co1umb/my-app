export const GoodsCard = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h3>price: {props.price}</h3>
      <h2>{props.name}</h2>
    </div>
  )
}