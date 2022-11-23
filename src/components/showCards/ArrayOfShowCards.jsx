import './showCards.css';

import './ArrayOfShowCards.jsx';
import SingleCard from "./SingleCard"

function ArrayOfShowCards(props) {
  return (
   <div className="showCardsGrid">
    {props.showCardsData.map((obj) => {
      return (
      <SingleCard key={obj.id} 
      title={obj.title} img={obj.img}
      imgName={obj.imgName}
      date={obj.date}
      par={obj.par}
      btnText={obj.btnText}
      ></SingleCard>
      )
    })}
   </div>
  )
}

export default ArrayOfShowCards