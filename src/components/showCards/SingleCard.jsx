function SingleCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.imgName} />
      <p>{props.title}</p>
      <p>{props.date}</p>
      <p>{props.par}</p>
      <button>{props.btnText}</button>
    </div>
  )
}

export default SingleCard;